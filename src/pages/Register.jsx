import styled from "styled-components";
import curly_yellow from "assets/curly_yellow.svg";
import curly_cyan from "assets/curly_cyan.svg";
import pig from "assets/pig.svg";
import deer from "assets/deer.svg";
import pig_light from "assets/pig_light.svg";
import deer_light from "assets/deer_light.svg";
import fox_reading from "assets/fox_reading.svg";
import sheep_teaching from "assets/sheep_teaching.svg";
import Layout from "components/RegisterLayout";
import Logo from "components/Logo";
import Spacer from "components/Spacer";
import { useState } from "react";
import Button from "components/Button";
import { Route, useHistory } from "react-router-dom";
import FormGroup from "components/FormGroup";
import { Formik } from "formik";
import * as Yup from "yup";

const Content = styled.div`
  position: relative;
  z-index: 2;

  .ageGroups {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.2rem;

    .item {
      transition: all 0.2s ease-out;

      &:hover {
        background-color: #ffffff;
      }

      &:nth-child(9) {
        grid-column: 2/3;
      }

      &.selected {
        border: 5px solid #9f9fff;
      }
    }
  }

  .chooseTime {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5.2rem;

    .item {
      height: 28rem;
      width: 24rem;
      background-color: #ffffff;
      padding: 0 1.4rem;
      border: 1px solid #efefef;
      border-radius: 2rem;
      transition: all 0.2s ease-out;

      &.selected {
        border: 5px solid #9f9fff;
      }

      &:disabled {
        opacity: 0.6;
        pointer-events: none;
      }

      .image {
        height: 9.6rem;
      }
    }
  }

  .cancelBtn {
    color: #ffffff;

    &.light {
      color: var(--primary_lighter);
    }
  }

  @media (max-width: 768px) {
    .ageGroups {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2.4rem;
      width: 100%;

      .item {
        &:nth-child(9) {
          grid-column: 1/2;
        }
      }
    }

    .chooseTime {
      grid-template-columns: 1fr;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    .chooseTime {
      margin-top: 20rem;
    }
  }
`;

const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4.8rem;

  .spanFull {
    grid-column: 1/3;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);

    .spanFull {
      grid-column: 1/2;
    }
  }
`;

const ageGroups = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Register = () => {
  const router = useHistory();
  const [ageGroup, setAgeGroup] = useState("");
  const [testTime, setTestTime] = useState("");

  const selectAgeGroup = () => {
    localStorage.setItem("ageGroup", ageGroup);
    router.push("/register/details");
  };

  const setDetails = (details) => {
    localStorage.setItem("details", JSON.stringify(details));
    router.push("/register/test-time");
  };

  const schema = Yup.object({
    first_name: Yup.string().required("Field required"),
    last_name: Yup.string().required("Field required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Field required"),
    phone: Yup.string().required("Field required"),
  });

  return (
    <>
      {/* Select age group */}
      <Route exact path="/register">
        <Layout>
          <img
            src={curly_yellow}
            alt="Curly"
            className="illustration topLeft"
          />
          <img src={curly_cyan} alt="Curly" className="illustration topRight" />
          <img
            src={pig}
            alt="Cartoon pig"
            className="illustration bottomLeft"
          />
          <img
            src={deer}
            alt="Cartoon deer"
            className="illustration bottomRight"
          />
          <img
            src={pig_light}
            alt="Cartoon pig"
            className="illustration bottomLeft light"
          />
          <img
            src={deer_light}
            alt="Cartoon deer"
            className="illustration bottomRight light"
          />
          <Spacer y={10.8} yMobile={4.8} />
          <Content className="flexColumn alignCenter">
            <Logo />
            <Spacer y={1.2} />
            <h3 className="title textCenter">What is your child's age group</h3>
            <Spacer y={1.2} />
            <p className="description t1 textCenter">
              Age group helps us personalize your child’s test.
            </p>
            <Spacer y={4.8} />
            <div className="ageGroups">
              {ageGroups.map((level) => (
                <Button
                  key={level}
                  text={`Year ${level}`}
                  bg="#ffffff"
                  color="var(--black_3)"
                  className={`t1 textBold item${
                    level === ageGroup ? " selected" : ""
                  }`}
                  onClick={() => setAgeGroup(level)}
                  fullWidth
                />
              ))}
            </div>
            <Spacer y={4.8} />
            <Button
              text="Next"
              width="28rem"
              className="textBold"
              disabled={!ageGroup}
              onClick={() => selectAgeGroup()}
            />
            <Spacer y={2.4} />
            <button
              className="p1 textBold cancelBtn"
              onClick={() => router.push("/")}
            >
              Cancel
            </button>
            <Spacer y={4.8} />
          </Content>
        </Layout>
      </Route>

      {/* Child's details */}
      <Route exact path="/register/details">
        <Layout className="light">
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
          <img
            src={pig_light}
            alt="Cartoon pig"
            className="illustration bottomLeft light"
          />
          <img
            src={deer_light}
            alt="Cartoon deer"
            className="illustration bottomRight light"
          />
          <Spacer y={10.8} />
          <Content className="flexColumn alignCenter">
            <Logo black />
            <Spacer y={1.2} />
            <h3 className="title textCenter">Your child’s details</h3>
            <Spacer y={1.2} />
            <p className="description t1 textCenter">
              Add your child’s name here. You will be able to receive <br />a
              report on your child’s test.
            </p>
            <Spacer y={4.8} />

            <Formik
              initialValues={{
                first_name: "",
                last_name: "",
                email: "",
                phone: "",
              }}
              validationSchema={schema}
              onSubmit={(values) => {
                setDetails(values);
              }}
            >
              {({ handleSubmit, values, isValid }) => (
                <FormWrapper onSubmit={handleSubmit}>
                  <FormGroup
                    fieldStyle="shortText"
                    name="first_name"
                    placeholder={`Child's first name`}
                  />
                  <FormGroup
                    fieldStyle="shortText"
                    name="last_name"
                    placeholder={`Child's last name`}
                  />
                  <FormGroup
                    fieldStyle="shortText"
                    type="email"
                    name="email"
                    placeholder={`Parent's email`}
                  />
                  <FormGroup
                    fieldStyle="shortText"
                    name="phone"
                    placeholder={`Parent's phone number`}
                  />
                  <div className="spanFull flexColumn alignCenter">
                    <Spacer y={4.8} />
                    <Button
                      type="submit"
                      text="Next"
                      width="28rem"
                      className="textBold"
                      disabled={
                        !isValid ||
                        !values.first_name ||
                        !values.last_name ||
                        !values.phone ||
                        !values.email
                      }
                    />
                    <Spacer y={2.4} />
                    <button
                      type="button"
                      className="p1 textBold cancelBtn light"
                      onClick={() => router.push("/")}
                    >
                      Cancel
                    </button>
                  </div>
                </FormWrapper>
              )}
            </Formik>

            <Spacer y={4.8} />
          </Content>
        </Layout>
      </Route>

      {/* Test time */}
      <Route exact path="/register/test-time">
        <Layout className="light">
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
          <img
            src={pig_light}
            alt="Cartoon pig"
            className="illustration bottomLeft light"
          />
          <img
            src={deer_light}
            alt="Cartoon deer"
            className="illustration bottomRight light"
          />
          <Spacer y={14.4} yMobile={8} />
          <Content className="flexColumn alignCenter">
            <div className="flexRow chooseTime">
              <button
                type="button"
                className={`flexColumn alignCenter justifyCenter item${
                  testTime === "now" ? " selected" : ""
                }`}
                onClick={() => setTestTime("now")}
              >
                <img src={fox_reading} alt="Cartoon Fox" className="image" />
                <Spacer y={0.6} />
                <h4 className="title">Take test now</h4>
                <Spacer y={0.6} />
                <span className="description">
                  Proceed to take test and ensure <br />
                  to follow all test instructions <br />
                  given.
                </span>
              </button>
              <button
                type="button"
                className={`flexColumn alignCenter justifyCenter item${
                  testTime === "later" ? " selected" : ""
                }`}
                onClick={() => setTestTime("later")}
                disabled
              >
                <img src={sheep_teaching} alt="Cartoon Fox" className="image" />
                <Spacer y={0.6} />
                <h4 className="title">Take test later</h4>
                <Spacer y={0.6} />
                <span className="description">
                  An email will be sent to you with <br />a link to take the
                  test at your <br />
                  child’s time.
                </span>
              </button>
            </div>
            <Spacer y={4.8} />
            <Button
              type="submit"
              text="Continue"
              width="28rem"
              className="textBold"
              disabled={!testTime}
              onClick={() => router.push("/test")}
            />
            <Spacer y={2.4} />
            <button
              type="button"
              className="p1 textBold cancelBtn light"
              onClick={() => router.push("/")}
            >
              Cancel
            </button>
            <Spacer y={4.8} />
          </Content>
        </Layout>
      </Route>
    </>
  );
};

export default Register;
