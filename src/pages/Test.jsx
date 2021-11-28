import styled from "styled-components";
import RegisterLayout from "components/RegisterLayout";
import Spacer from "components/Spacer";
import { useState } from "react";
import { Route } from "react-router-dom";
import lion from "assets/lion.svg";
import curly_yellow from "assets/curly_yellow.svg";
import curly_cyan from "assets/curly_cyan.svg";
import QuestionLayout from "components/QuestionLayout";
import Result from "./Result";
import { useEffect } from "react";

const Instructions = styled(RegisterLayout)``;

const Test = () => {
  const [ageGroup, setAgeGroup] = useState("");
  const [details, setDetails] = useState("");

  useEffect(() => {
    const tempAgeGroup = localStorage.getItem("ageGroup");
    const tempDetails = localStorage.getItem("details");

    if (tempAgeGroup) {
      setAgeGroup(parseInt(tempAgeGroup));
    }

    if (tempDetails) {
      setDetails(JSON.parse(tempDetails));
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
            <Spacer y={17.2} yMobile={10} />
            <img src={lion} alt="Cartoon lion" />
            <Spacer y={4.8} />
            {/* <h4 className="title textCenter">
              You can only attempt this test once!
            </h4>
            <Spacer y={1.2} /> */}
            <p className="textCenter">
              An email has been sent to{" "}
              <b className="textUnderline colorPrimaryLight">
                {details.email ?? "your inbox"}
              </b>{" "}
              with a link to the test. <br />
              If you don't see this mail in your inbox, please check your spam.
            </p>
            <Spacer y={1.2} />
            <span className="description t1 textCenter">
              The test covers topics in the following subjects: <br />
              English language, Mathematics
              {ageGroup >= 7 && " , Biology, Chemistry and Physics"}.
            </span>
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
