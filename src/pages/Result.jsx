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

  .doneBtn {
    position: relative;
    background-color: var(--accent_2_main);
    border-radius: 2rem;
    width: 28rem;
    height: 5.6rem;
    color: #ffffff;
  }
`;

const Result = () => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const ovr = localStorage.getItem("ovr");

    setScore(ovr);

    localStorage.clear();
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
      <Spacer y={9.6} />
      <h1 className="score">{score}%</h1>
      <Spacer y={0.3} />
      <span className="description t1 textCenter">Your overall score</span>
      <Spacer y={9.6} />
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
