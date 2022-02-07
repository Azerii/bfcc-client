import styled from "styled-components";
import party_decor from "assets/party_decor.svg";
import hurray from "assets/hurray.svg";
import Spacer from "components/Spacer";
import { useState } from "react";
import { useEffect } from "react";

const Wrapper = styled.div`
  background-color: var(--primary_darker);
  min-height: 100vh;
  width: 100vw;
  position: relative;

  .illustration {
    position: absolute;
  }

  .partyDecor {
    top: 0;
  }

  .hurray {
    bottom: 0;
  }

  .title {
    color: #ffffff;
  }

  .description {
    color: #ffffff;
  }

  .score {
    color: var(--accent_3_main);
  }

  .breakdown {
    width: 28rem;
    color: #ffffff;

    .item {
      margin-bottom: 0.6rem;
    }

    .scoreItem {
      width: 5ch;
    }
  }

  .doneBtn {
    position: relative;
    background-color: var(--accent_2_main);
    border-radius: 2rem;
    width: 28rem;
    height: 5.6rem;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    .illustration {
      display: none;
    }

    .title {
      padding: 2rem;
    }
  }
`;

const Result = () => {
  const [overall, setOverall] = useState(0);
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const ovr = localStorage.getItem("ovr");
    const details = localStorage.getItem("details");

    if (details) {
      let temp = JSON.parse(details);
      setScores(temp.scores);
    }

    setOverall(ovr);
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper className="flexColumn alignCenter">
      <img
        src={party_decor}
        alt="Party decor"
        className="illustration partyDecor"
      />
      <img src={hurray} alt="Hurray" className="illustration hurray" />

      <Spacer y={14.4} />
      <h4 className="title textCenter">
        Congratulations! <br />
        You’ve successfully completed the assessment.
      </h4>
      <Spacer y={6} />
      <h1 className="score">{overall || 0}%</h1>
      <Spacer y={0.3} />
      <span className="description t1 textCenter">Your overall score</span>
      <Spacer y={1.6} />
      <div className="breakdown">
        <div className="flexRow justifySpaceBetween">
          <span className="p1 textBold">Subject</span>
          <span className="p1 textBold">Score</span>
        </div>
        <Spacer y={1.2} />

        {scores?.map((item, index) => (
          <div key={index} className="flexRow justifySpaceBetween item">
            <span className="p2 textCapitalize">
              {item.subject} {item.ageGroup}
            </span>
            <span className="p2 scoreItem">{item.score}%</span>
          </div>
        ))}
      </div>
      <Spacer y={4.8} />
      <button
        type="button"
        className="doneBtn p1"
        onClick={() => window.location.replace("/")}
      >
        Done
      </button>
    </Wrapper>
  );
};

export default Result;
