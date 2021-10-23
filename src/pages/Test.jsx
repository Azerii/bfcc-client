import styled from "styled-components";
import Loader from "components/Loader";
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

const Instructions = styled(RegisterLayout)``;

const Test = () => {
  const router = useHistory();
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Route exact path="/test">
        {loading && (
          <Loader
            title="Hang on"
            description={`This might take a couple \nof seconds.`}
          />
        )}

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
            <Spacer y={10.8} />
            <img src={lion} alt="Cartoon lion" />
            <Spacer y={4.8} />
            <h4 className="title textCenter">
              You can only attempt this test once!
            </h4>
            <Spacer y={1.2} />
            <span className="description t1 textCenter">
              This test covers topics in various subjects which include: <br />
              English language, Mathematics.
            </span>
            <Spacer y={4.8} />
            <Button
              type="button"
              text="Start test"
              width="28rem"
              className="textBold"
              onClick={() => router.push("/test/session")}
            />
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
