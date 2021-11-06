import styled from "styled-components";
import RegisterLayout from "components/RegisterLayout";
import Spacer from "components/Spacer";
import { useState } from "react";
import { Route, useHistory } from "react-router-dom";
import lion from "assets/lion.svg";
import curly_yellow from "assets/curly_yellow.svg";
import curly_cyan from "assets/curly_cyan.svg";
import Button from "components/Button";
import QuestionLayout from "components/QuestionLayout";
import Result from "./Result";
import { useEffect } from "react";

const Instructions = styled(RegisterLayout)``;

const Test = () => {
  const router = useHistory();
  const [ageGroup, setAgeGroup] = useState("");

  useEffect(() => {
    const tempAgeGroup = localStorage.getItem("ageGroup");

    if (tempAgeGroup) {
      setAgeGroup(parseInt(tempAgeGroup));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Route exact path="/test">
        <Instructions className="light">
          <img
            src={curly_yellow}
            alt="Curly"
            className="illustration topLeft light"
          />
          <img
            src={curly_cyan}
            alt="Curly"
            className="illustration topRight light"
          />

          <div className="content flexColumn alignCenter">
            <Spacer y={20.8} yMobile={10} />
            <img src={lion} alt="Cartoon lion" />
            <Spacer y={4.8} />
            {/* <h4 className="title textCenter">
              You can only attempt this test once!
            </h4>
            <Spacer y={1.2} /> */}
            <span className="description t1 textCenter">
              This test covers topics in the following subjects: <br />
              English language, Mathematics {ageGroup >= 7 && "and Science"}.
            </span>
            <Spacer y={4.8} />
            <Button
              type="button"
              text="Start test"
              width="28rem"
              className="textBold"
              onClick={() => router.push("/test/session")}
            />
            <Spacer y={4.8} />
          </div>
        </Instructions>
      </Route>

      {/* Questions */}
      <Route path="/test/session" component={QuestionLayout} />

      {/* Result */}
      <Route exact path="/test/result" component={Result} />
    </>
  );
};

export default Test;
