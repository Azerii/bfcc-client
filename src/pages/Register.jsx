import styled from "styled-components";
import curly_yellow from "assets/curly_yellow.svg";
import curly_cyan from "assets/curly_cyan.svg";
import pig from "assets/pig.svg";
import deer from "assets/deer.svg";
import pig_light from "assets/pig_light.svg";
import deer_light from "assets/deer_light.svg";
import fox_reading from "assets/fox_reading.svg";
import sheep_teaching from "assets/sheep_teaching.svg";
import Layout from "components/Layout";
import Logo from "components/Logo";
import Spacer from "components/Spacer";
import { useState } from "react";
import Button from "components/Button";
import { Route, useHistory } from "react-router-dom";
import FormGroup from "components/FormGroup";

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

      .image {
        height: 9.6rem;
      }
    }
  }

  .details {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4.8rem;
  }

  .cancelBtn {
    color: #ffffff;

    &.light {
      color: var(--primary_lighter);
    }
  }
`;

const ageGroups = [
  "Year 1",
  "Year 2",
  "Year 3",
  "Year 4",
  "Year 5",
  "Year 6",
  "Year 7",
  "Year 8",
  "Year 9",
  "Year 10",
];

const Register = () => {
  const router = useHistory();
  const [ageGroup, setAgeGroup] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [testTime, setTestTime] = useState("");

  const handleSubmit = () => {};

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
          <Spacer y={10.8} />
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
                  text={level}
                  bg="#ffffff"
                  color="var(--black_3)"
                  className={`t1 textBold item${
                    level === ageGroup ? " selected" : ""
                  }`}
                  onClick={() => setAgeGroup(level)}
                />
              ))}
            </div>
            <Spacer y={4.8} />
            <Button
              text="Next"
              width="28rem"
              className="textBold"
              disabled={!ageGroup}
              onClick={() => router.push("/register/details")}
            />
            <Spacer y={2.4} />
            <button className="p1 textBold cancelBtn">Cancel</button>
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
            <form onSubmit={handleSubmit} className="details">
              <FormGroup
                fieldStyle="shortText"
                name="first_name"
                placeholder={`Child's first name`}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <FormGroup
                fieldStyle="shortText"
                name="last_name"
                placeholder={`Child's last name`}
                onChange={(e) => setLastName(e.target.value)}
              />
              <FormGroup
                fieldStyle="shortText"
                type="email"
                name="email"
                placeholder={`Parent's email`}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormGroup
                fieldStyle="shortText"
                name="phone"
                placeholder={`Parent's phone number`}
                onChange={(e) => setPhone(e.target.value)}
              />
            </form>
            <Spacer y={4.8} />
            <Button
              type="submit"
              text="Next"
              width="28rem"
              className="textBold"
              disabled={!firstName || !lastName || !email || !phone}
              onClick={() => router.push("/register/test-time")}
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
          <Spacer y={14.4} />
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
              // onClick={() => router.push("/register")}
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
