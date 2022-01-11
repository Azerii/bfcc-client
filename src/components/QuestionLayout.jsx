import homeIcon from "assets/home.svg";
import elephant from "assets/elephant.svg";
import bear from "assets/bear.svg";
import left_arrow from "assets/left_arrow.svg";
import right_arrow from "assets/right_arrow.svg";
import bunny from "assets/bunny.svg";
// import pig_alone from "assets/pig_alone.svg";
// import play from "assets/play.svg";
// import sound_wave from "assets/sound_wave.svg";
// import audio_sample from "assets/sample.mp3";
// import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import Spacer from "./Spacer";
import Button from "./Button";
import localStorage from "redux-persist/es/storage";
import ConfirmModal from "./ConfirmModal";
import Loader from "./Loader";
import {
  // AudioGroup,
  Wrapper,
  Info,
  Options,
  Content,
  NavButton,
} from "./QuestionLayoutStyles";
import axios from "axios";
import { useHistory } from "react-router-dom";

const tempSubjects = [
  "English Language",
  "Mathematics",
  "Biology",
  "Chemistry",
  "Physics",
];

// function isAudioType(s) {
//   return /\.(mp3|mp4)$/i.test(s);
// }

function isImageType(s) {
  return /\.(jpe?g|png|gif|bmp|svg)$/i.test(s);
}

const base_url = "https://bfcc-core.herokuapp.com/api/v1";

const QuestionLayout = () => {
  const router = useHistory();
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [currentSection, setCurrentSection] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [allSelected, setAllSelected] = useState(new Map());
  const [selectedOption, setSelectedOption] = useState("");
  const [confirmPrompt, setConfirmPrompt] = useState("Ready to submit?");
  const [confirmDescription, setConfirmDescription] = useState(
    "Are you sure you want to submit this test? If you select submit, you will not be able to edit your answers."
  );
  const [confirmActionText, setConfirmActionText] = useState("Submit");
  const [warning, setWarning] = useState(false);

  const nextQuestion = () => {
    if (
      questions[currentSection] &&
      questions[currentSection][questionIndex + 1]
    ) {
      setQuestionIndex(questionIndex + 1);
      document.querySelector("html").scrollTo(0, 0);
    } else {
      return false;
    }
  };

  const prevQuestion = () => {
    if (
      questions[currentSection] &&
      questions[currentSection][questionIndex - 1]
    ) {
      setQuestionIndex(questionIndex - 1);
      document.querySelector("html").scrollTo(0, 0);
    } else {
      return false;
    }
  };

  // const playAudio = () => {
  //   const audio = document.querySelector(".audioFile");

  //   audio.play();
  // };

  const selectOption = async (question, option, optionKey) => {
    const point = option === question.options[optionKey - 1] ? 1 : 0;
    const section = `level ${question.classId} ${
      tempSubjects[question.subjectId - 1]
    }`;

    let points = {};
    let sectionKeys = [];
    let sectionKeyNames = await localStorage.getItem("sectionKeys");
    let sectionName = await localStorage.getItem(section);

    if (sectionKeyNames) {
      sectionKeys = [...JSON.parse(sectionKeyNames)];
    }

    if (sectionName) {
      points = { ...JSON.parse(sectionName) };
    } else {
      sectionKeys.push(section);

      localStorage.setItem("sectionKeys", JSON.stringify(sectionKeys));
    }

    points[questionIndex + 1] = point;
    localStorage.setItem(section, JSON.stringify(points));

    setAllSelected(
      allSelected.set(`${currentSection}${questionIndex}`, `${option}`)
    );
    setSelectedOption(option);
  };

  const gradeSection = async () => {
    const tempKeys = await localStorage.getItem("sectionKeys");
    let graded = false;
    let score = 0;

    if (!tempKeys) {
      alert("You have not attempted any question");
      return;
    }

    try {
      const sectionKeys = JSON.parse(await localStorage.getItem("sectionKeys"));
      const sectionName = sectionKeys[currentSection];
      const sectionPoints = JSON.parse(await localStorage.getItem(sectionName));
      const numberOfQuestions = questions[currentSection].length;

      if (allSelected.size < numberOfQuestions) {
        throw new Error("You must attempt all questions");
      }

      let acc = 0;

      Object.keys(sectionPoints).forEach((key) => {
        acc += sectionPoints[key];
      });

      score = parseInt((acc / numberOfQuestions) * 100);

      let tempScores = {};

      if (localStorage.getItem("scores")) {
        tempScores = { ...JSON.parse(await localStorage.getItem("scores")) };
      }

      tempScores[sectionName] = score;
      localStorage.setItem("scores", JSON.stringify(tempScores));

      setAllSelected(new Map());
      graded = true;
    } catch (e) {
      alert(e.message);
    }

    return { graded, score };
  };

  const nextSection = async () => {
    const result = await gradeSection();

    if (result?.graded) {
      setQuestionIndex(0);
      setCurrentSection(currentSection + 1);
    }
  };

  const handleSubmit = async () => {
    const result = await gradeSection();

    if (result?.graded) {
      window.onbeforeunload = null;
      let acc = 0,
        ovr;

      const scores = JSON.parse(await localStorage.getItem("scores"));
      const ageGroup = JSON.parse(await localStorage.getItem("ageGroup"));
      const details = JSON.parse(await localStorage.getItem("details"));
      const numberOfSections = Object.keys(scores).length;

      details.ageGroup = ageGroup;
      details.scores = [];

      Object.keys(scores).forEach((key) => {
        acc += parseInt(scores[key]);

        let score = scores[key];
        let subject = key.split(" ").slice(2).join(" ");
        let scoreData = { subject, score };

        details.scores.push(scoreData);
      });

      ovr = parseInt(acc / numberOfSections);

      details.overall_score = ovr;

      try {
        setLoading(true);
        const res = await axios.post(`${base_url}/result`, details);

        if (res?.data) {
          localStorage.setItem("ovr", ovr);

          window.location.replace("/test/result");
        } else {
          setLoading(false);
          alert("Something went wrong");
        }
      } catch (e) {
        setLoading(false);
        alert("An error occurred");
        console.log(e);
      }
    } else {
      return;
    }
  };

  const showConfirmModal = (type) => {
    if (type === "warning") {
      setConfirmActionText("Leave");
      setConfirmDescription("You will lose all your progress if you proceed");
      setConfirmPrompt("Are you sure you want to leave?");
      setWarning(true);
    }

    document.querySelector("#confirmModal").classList.add("show");
  };

  const getQuestions = async (subjectId, ageGroupId) => {
    const data = {
      subjectId,
      ageGroupId,
    };
    try {
      let res = await axios.get(`${base_url}/quest-by-subj-agrp`, {
        params: data,
      });

      return res?.data;
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  const getQuestionsByAgeGroup = async () => {
    setLoading(true);
    let ageGroup = parseInt(await localStorage.getItem("ageGroup"));
    let details = JSON.parse(await localStorage.getItem("details"));
    let __questions = [];

    try {
      if (!details) {
        throw new Error("Please register first");
      }

      const formData = new FormData();

      formData.append("email", details.email);

      const contactRes = await axios.post(`${base_url}/getContact`, formData);

      if (!contactRes || contactRes.data.status === "failure") {
        throw new Error("Please register first");
      }

      if (ageGroup === 1) {
        const englishQ = await getQuestions(1, 1);
        const mathQ = await getQuestions(2, 1);

        englishQ?.length && __questions.push(englishQ);
        mathQ?.length && __questions.push(mathQ);
      } else if (ageGroup < 7) {
        const englishQ = await getQuestions(1, ageGroup);
        const mathQ1 = await getQuestions(2, ageGroup - 1);
        const mathQ2 = await getQuestions(2, ageGroup);

        englishQ?.length && __questions.push(englishQ);
        mathQ1?.length && __questions.push(mathQ1);
        mathQ2?.length && __questions.push(mathQ2);
      } else if (ageGroup >= 7) {
        const englishQ = await getQuestions(1, ageGroup);
        const mathQ1 = await getQuestions(2, ageGroup - 1);
        const mathQ2 = await getQuestions(2, ageGroup);
        const biologyQ = await getQuestions(3);
        const chemistryQ = await getQuestions(4);
        const physicsQ = await getQuestions(5);

        englishQ?.length && __questions.push(englishQ);
        mathQ1?.length && __questions.push(mathQ1);
        mathQ2?.length && __questions.push(mathQ2);
        biologyQ?.length && __questions.push(biologyQ);
        chemistryQ?.length && __questions.push(chemistryQ);
        physicsQ?.length && __questions.push(physicsQ);
      }

      setQuestions(__questions);
      setLoading(false);
    } catch (e) {
      alert(e.message);
      router.push("/register");
    }
  };

  useEffect(() => {
    getQuestionsByAgeGroup();
    window.onbeforeunload = (e) => {
      e.preventDefault();
      e.returnValue =
        "Are you sure you want to leave? Your progress will not be saved";
    };
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      <Loader
        title="Hang on"
        description={`This might take a couple \nof seconds.`}
      />
    );
  }

  return (
    <Wrapper>
      <Info className="level">
        <img src={elephant} alt="Cartoon elephant" className="image" />
        <div className="text">
          <h4 className="ageGroup textUpperCase">
            Level{" "}
            {questions[currentSection]
              ? typeof parseInt(
                  questions[currentSection][questionIndex]?.ageGroupId
                ) === "number"
                ? parseInt(questions[currentSection][questionIndex]?.ageGroupId)
                : localStorage.getItem("ageGroup")
              : null}
          </h4>
          <h4 className="subject">
            (
            {questions[currentSection]
              ? tempSubjects[
                  parseInt(
                    questions[currentSection][questionIndex]?.subjectId
                  ) - 1
                ]
              : null}
            )
          </h4>
        </div>
      </Info>
      <Info className="hint">
        <img src={bear} alt="Cartoon bear" className="image" />
        <div className="text">
          <span>solve the following question</span>
        </div>
      </Info>

      <button
        className="home flexRow alignCenter justifyCenter"
        onClick={() => showConfirmModal("warning")}
      >
        <img src={homeIcon} alt="Home" className="icon" />
      </button>

      <NavButton
        className="flexRow alignCenter justifyCenter circle prev"
        disabled={
          questions[currentSection]
            ? !questions[currentSection][questionIndex - 1]
            : false
        }
        onClick={prevQuestion}
      >
        <img src={left_arrow} alt="Left Arrow" className="icon" />
      </NavButton>
      <NavButton
        className="flexRow alignCenter justifyCenter circle next"
        disabled={
          questions[currentSection]
            ? !questions[currentSection][questionIndex + 1]
            : false
        }
        onClick={nextQuestion}
      >
        <img src={right_arrow} alt="Right Arrow" className="icon" />
      </NavButton>

      <ConfirmModal
        prompt={confirmPrompt}
        description={confirmDescription}
        actionText={confirmActionText}
        callback={handleSubmit}
        warning={warning}
      />

      {questions[currentSection] &&
        !questions[currentSection][questionIndex + 1] && (
          <Button
            type="button"
            text={
              questions[currentSection + 1]?.length ? "Next section" : "Submit"
            }
            className="nextSection"
            onClick={
              questions[currentSection + 1]?.length
                ? nextSection
                : showConfirmModal
            }
          />
        )}

      {questions[currentSection] && (
        <Content className="flexColumn alignCenter">
          <Spacer y={9.6} yMobile={7.2} />
          <p className="questionNumber textCenter">
            QUESTION {questionIndex + 1} 0F {questions[currentSection]?.length}
          </p>
          <Spacer y={4.8} />
          {questions[currentSection][questionIndex]?.comprehension && (
            <h3 className="passage textCenter">
              {questions[currentSection][questionIndex]?.comprehension}
            </h3>
          )}
          {questions[currentSection][questionIndex]?.comprehension && (
            <Spacer y={4.8} />
          )}
          {questions[currentSection][questionIndex]?.comprehension && (
            <h4 className="title question textCenter">
              {questions[currentSection][questionIndex]?.question}
            </h4>
          )}
          {!questions[currentSection][questionIndex]?.comprehension && (
            <h3 className="title question textCenter">
              {questions[currentSection][questionIndex]?.question}
            </h3>
          )}
          <Spacer y={2.4} />
          {questions[currentSection][questionIndex]?.media_path && (
            <Spacer y={2.4} />
          )}
          {/* {isAudioType(
            questions[currentSection][questionIndex]?.media_path
          ) && (
            <AudioGroup className="flexRow alignCenter">
              <audio src={audio_sample} className="audioFile"></audio>
              <img src={pig_alone} alt="Cartoon pig" className="pig" />
              <Spacer x={2.4} />
              <button className="playAudio" onClick={playAudio}>
                <img src={play} alt="play" className="icon" />
              </button>
              <Spacer x={0.6} />
              <img src={sound_wave} alt="Sound wave" className="wave" />
            </AudioGroup>
          )} */}
          {isImageType(
            questions[currentSection][questionIndex]?.media_path
          ) && (
            <img
              src={`https://bfcc-core.herokuapp.com/api/v1/uploads/${questions[currentSection][questionIndex]?.media_path}`}
              alt="illustration"
              className="questionImage"
            />
          )}
          {/* {questions[currentSection][questionIndex]?.media_path && (
            <Spacer y={4.8} />
          )} */}
          <Spacer y={4.8} />
          {questions[currentSection]?.map((question, index) => (
            <Options
              className={`${
                question === questions[currentSection][questionIndex]
                  ? "show"
                  : "hide"
              }`}
              key={index}
            >
              {typeof question.options === "object" &&
                question.options.map((option, index) => (
                  <button
                    key={index}
                    className={`item t1 bold textUpperCase textLeft${
                      allSelected.get(`${currentSection}${questionIndex}`) ===
                        option || selectedOption === option
                        ? " selected"
                        : ""
                    }`}
                    onClick={() =>
                      selectOption(question, option, question.answer)
                    }
                  >
                    <span>{option}</span>
                    <img src={bunny} alt="bunny" className="bunny" />
                  </button>
                ))}
            </Options>
          ))}
          <Spacer y={4.8} />
        </Content>
      )}
    </Wrapper>
  );
};

export default QuestionLayout;
