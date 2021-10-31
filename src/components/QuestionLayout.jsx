import styled from "styled-components";
import homeIcon from "assets/home.svg";
import elephant from "assets/elephant.svg";
import bear from "assets/bear.svg";
import left_arrow from "assets/left_arrow.svg";
import right_arrow from "assets/right_arrow.svg";
import bunny from "assets/bunny.svg";
import pig_alone from "assets/pig_alone.svg";
import play from "assets/play.svg";
import sound_wave from "assets/sound_wave.svg";
import audio_sample from "assets/sample.mp3";
import image_sample from "assets/number_5.svg";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Spacer from "./Spacer";
import Button from "./Button";
import localStorage from "redux-persist/es/storage";
import ConfirmModal from "./ConfirmModal";
import { useEffect } from "react";

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  background-color: var(--accent_2_light);
  overflow: hidden;

  .home {
    position: fixed;
    top: 4.8rem;
    left: 9.6rem;
    background-color: #ffffff;
    height: 5.6rem;
    width: 5.6rem;
    border-radius: 50%;

    &::after {
      content: "";
      position: absolute;
      z-index: 1;
      height: 4.8rem;
      width: 4.8rem;
      border-radius: 50%;
      background-color: var(--grey_1);
    }

    .icon {
      position: relative;
      z-index: 2;
      height: 3rem;
    }
  }

  .nextSection {
    position: fixed;
    right: 9.6rem;
    bottom: 4.8rem;
  }

  .questionImage {
    height: 14.4rem;
  }
`;

const Info = styled.div`
  position: absolute;
  z-index: 0;
  pointer-events: none;

  &.level {
    position: fixed;
    height: 39rem;
    width: 27.5rem;
    top: 4.8rem;
    right: 0;

    .image {
      top: 0;
      right: 0;
    }

    .text {
      top: 4rem;
      left: 1.6rem;
      max-width: 14.4rem;
    }
  }

  &.hint {
    height: 36rem;
    width: 44rem;
    bottom: 0;
    left: 0;

    .image {
      bottom: 0;
      left: 0;
    }

    .text {
      top: 4rem;
      right: 2.8rem;
      max-width: 18rem;
    }
  }

  .image {
    position: absolute;
    z-index: 1;
  }

  .text {
    position: absolute;
    z-index: 2;
    color: #ffffff;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    text-align: center;
  }
`;

const NavButton = styled.button`
  position: fixed;
  top: 45vh;
  // transform: translateY(-50vh);
  background-color: #ffffff;
  height: 9.6rem;
  width: 9.6rem;
  z-index: 2;

  &:disabled {
    opacity: 0.6;
    pointer-events: none;
  }

  &.prev {
    left: 9.6rem;
  }

  &.next {
    right: 9.6rem;
  }

  .icon {
    height: 7.2rem;
  }
`;

const Content = styled.div`
  width: 60vw;
  margin: auto;

  .passage {
    color: var(--black_2);
  }
`;

const Options = styled.div`
  width: 39rem;
  margin: auto;
  display: none;

  &.show {
    display: block;
  }

  .item {
    height: 6rem;
    width: 100%;
    border: 5px solid #ffffff;
    border-radius: 2rem;
    background-color: transparent;
    position: relative;
    margin-bottom: 2.4rem;
    padding: 0 1.6rem;
    transition: all 0.2s ease-out;

    .bunny {
      display: none;
      position: absolute;
      bottom: 0;
      right: 8px;
      height: 7.4rem;
    }

    &.selected {
      background-color: #ffffff;

      .bunny {
        display: block;
      }
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const AudioGroup = styled.div`
  .pig {
    height: 20rem;
  }

  .wave {
    height: 9.6rem;
  }
`;

const tempSubjects = ["English Language", "Mathematics", "Science"];

const tempQuestions = [
  [
    {
      question: "Where did the bird hop up to?",
      options: ["The fence", "The nest", "The window", "The garden"],
      answer: 3,
      comprehension:
        "A bird hopped up to my window. I gave her some bread. She made a nest in my garden. Now I look after her little ones.",
      media_path: "",
      classId: 1,
      subjectId: 1,
    },
    {
      question: "Where was Kim going?",
      options: [
        "To school",
        "To a party",
        "To the bicycle shop",
        "To the road",
      ],
      answer: 1,
      comprehension:
        "Kim stopped on her way to school. In the middle of the traffic lay two children. Their bicycles had crashed into each other. Kim ran quickly to help. She saw that no one was hurt. The children pointed to a television camera. ‘We are taking part in a road safety lesson,’ they said.",
      media_path: "",
      classId: 1,
      subjectId: 1,
    },
    {
      question: "Why did Ali go into the temple? ",
      options: ["To pray", "To sight-see", "To shelter", "To play"],
      answer: 3,
      comprehension:
        "As Ali sheltered in an old temple, his shoulder knocked a secret spring. Instantly, he was thrown into an underground room. In the darkness, the walls seemed to be covered with jewels. Ali rested a while. He knew that desert travellers often imagined strange things.Later, he explored the place for a way to escape. To his amazement, the jewels were still there. He had found a palace that had been buried long ago.",
      media_path: "",
      classId: 1,
      subjectId: 1,
    },
    {
      question: "What equipment assisted Jan in her exploration under water?",
      options: ["Head band", "Socks", "Diving belt", "Timer"],
      answer: 3,
      comprehension:
        "Jan buckled on her diving belt of metal weights and dropped from the launch. Skipper Kells supervised her air-hose to prevent tangling. Leo, following the bubbles, guided the dinghy above the diver, as she searched the mysterious underwater world. Jan surfaced frequently clutching crayfish. The required number of specimens was almost obtained when the grey nurse shark advanced directly towards her. Jan retreated cautiously without signalling for assistance. The creature brushed by, ignoring her, as baby sharks emerged from some rocky grooves. Their welfare was more important to the shark than the diver’s now motionless figure. ",
      media_path: "",
      classId: 1,
      subjectId: 1,
    },
    {
      question: "Who is the chief enemy of the fox?",
      options: ["Cat", "Tiger", "Dog", "Man"],
      answer: 4,
      comprehension:
        "Among animals, the fox has no rival for cunning. Suspicious of man, who is its only natural enemy, it will, when pursued, perform extraordinary feats, even alighting on the backs of sheep to divert its scent. Parent foxes share the responsibilities of cub-rearing. Through their hunting expeditions, they acquire an uncanny knowledge of their surroundings which they use in an emergency. This is well illustrated by the story of a hunted fox which led its pursuers to a neglected mine-shaft enclosed by a circular hedge. It appeared to surmount the barrier. The hounds followed headlong, only to fall into the accumulated water below. The fox, however, apparently on familiar territory, had skirted the hedge and subsequently escaped",
      classId: 1,
      subjectId: 1,
    },
    {
      question: "Select what you hear",
      options: ["And", "Here", "Is", "He"],
      answer: 2,
      media_path: "sample.mp3",
      classId: 1,
      subjectId: 1,
    },
  ],
  [
    {
      question: "Choose the correct answer from the number to words",
      options: ["Eight", "Five", "Six", "Three"],
      answer: 2,
      media_path: "number_5.svg",
      classId: 4,
      subjectId: 2,
    },
  ],
];

function isAudioType(s) {
  return /\.(mp3|mp4)$/i.test(s);
}

function isImageType(s) {
  return /\.(jpe?g|png|gif|bmp|svg)$/i.test(s);
}

const QuestionLayout = () => {
  const router = useHistory();
  const [questions, setQuestions] = useState(tempQuestions);
  const [currentSection, setCurrentSection] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [allSelected, setAllSelected] = useState(new Map());
  const [selectedOption, setSelectedOption] = useState("");
  const [confirmPrompt, setConfirmPrompt] = useState("Ready to submit?");
  const [confirmDescription, setConfirmDescription] = useState(
    "Are you sure you want to submit this test? If you select submit, you will not be able to edit your answers."
  );
  const [confirmActionText, setConfirmActionText] = useState("Submit");

  const nextQuestion = () => {
    if (questions[currentSection][questionIndex + 1]) {
      setQuestionIndex(questionIndex + 1);
    } else {
      return false;
    }
  };

  const prevQuestion = () => {
    if (questions[currentSection][questionIndex - 1]) {
      setQuestionIndex(questionIndex - 1);
    } else {
      return false;
    }
  };

  const playAudio = () => {
    const audio = document.querySelector(".audioFile");

    audio.play();
  };

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
      let acc = 0,
        ovr;

      const scores = JSON.parse(await localStorage.getItem("scores"));
      const numberOfSections = Object.keys(scores).length;

      Object.keys(scores).forEach((key) => {
        acc += parseInt(scores[key]);
      });

      ovr = parseInt(acc / numberOfSections);

      localStorage.setItem("ovr", ovr);

      window.location.replace("/test/result");
    } else {
      alert("An error occurred");
    }
  };

  const showConfirmModal = () => {
    document.querySelector("#confirmModal").classList.add("show");
  };

  return (
    <Wrapper>
      <Info className="level">
        <img src={elephant} alt="Cartoon elephant" className="image" />
        <div className="text">
          <span className="ageGroup textUpperCase">
            Level {questions[currentSection][questionIndex].classId}
          </span>
          <span className="subject">
            (
            {
              tempSubjects[
                questions[currentSection][questionIndex].subjectId - 1
              ]
            }
            )
          </span>
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
        onClick={() => router.push("/test")}
      >
        <img src={homeIcon} alt="Home" className="icon" />
      </button>

      <NavButton
        className="flexRow alignCenter justifyCenter circle prev"
        disabled={!questions[currentSection][questionIndex - 1]}
        onClick={prevQuestion}
      >
        <img src={left_arrow} alt="Left Arrow" className="icon" />
      </NavButton>
      <NavButton
        className="flexRow alignCenter justifyCenter circle next"
        disabled={!questions[currentSection][questionIndex + 1]}
        onClick={nextQuestion}
      >
        <img src={right_arrow} alt="Right Arrow" className="icon" />
      </NavButton>

      <ConfirmModal
        prompt={confirmPrompt}
        description={confirmDescription}
        actionText={confirmActionText}
        handleSubmit={handleSubmit}
      />

      {!questions[currentSection][questionIndex + 1] && (
        <Button
          type="button"
          text={questions[currentSection + 1] ? "Next section" : "Submit"}
          className="nextSection"
          onClick={
            questions[currentSection + 1] ? nextSection : showConfirmModal
          }
        />
      )}

      <Content className="flexColumn alignCenter">
        <Spacer y={9.6} />
        <p className="questionNumber textCenter textUpperCase">
          OUESTION {questionIndex + 1} 0F {questions[currentSection].length}
        </p>
        <Spacer y={2.4} />
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
          <h3 className="title question textCenter textUpperCase">
            {questions[currentSection][questionIndex]?.question}
          </h3>
        )}
        <Spacer y={2.4} />
        {questions[currentSection][questionIndex]?.media_path && (
          <Spacer y={2.4} />
        )}
        {isAudioType(questions[currentSection][questionIndex]?.media_path) && (
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
        )}
        {isImageType(questions[currentSection][questionIndex]?.media_path) && (
          <img
            src={image_sample}
            alt="illustration"
            className="questionImage"
          />
        )}
        {questions[currentSection][questionIndex]?.media_path && (
          <Spacer y={4.8} />
        )}
        {questions[currentSection]?.map((question, index) => (
          <Options
            className={`${
              question === questions[currentSection][questionIndex]
                ? "show"
                : "hide"
            }`}
            key={index}
          >
            {question.options?.map((option, index) => (
              <button
                key={index}
                className={`item t1 bold textUpperCase textLeft${
                  allSelected.get(`${currentSection}${questionIndex}`) ===
                    option || selectedOption === option
                    ? " selected"
                    : ""
                }`}
                onClick={() => selectOption(question, option, question.answer)}
              >
                <span>{option}</span>
                <img src={bunny} alt="bunny" className="bunny" />
              </button>
            ))}
          </Options>
        ))}
        <Spacer y={4.8} />
      </Content>
    </Wrapper>
  );
};

export default QuestionLayout;
