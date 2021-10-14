import styled from "styled-components";
import homeIcon from "assets/home.svg";
import elephant from "assets/elephant.svg";
import bear from "assets/bear.svg";
import left_arrow from "assets/left_arrow.svg";
import right_arrow from "assets/right_arrow.svg";
import bunny from "assets/bunny.svg";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Spacer from "./Spacer";

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  background-color: var(--accent_2_light);
  overflow: hidden;

  .home {
    position: absolute;
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
`;

const Info = styled.div`
  position: absolute;

  &.level {
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
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #ffffff;
  height: 9.6rem;
  width: 9.6rem;

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
  width: 50vw;
  margin: auto;

  .passage {
    color: var(--black_2);
  }
`;

const Options = styled.div`
  width: 39rem;
  margin: auto;

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

const tempOptions = ["option 1", "option 2", "option 3", "option 4"];

const QuestionLayout = () => {
  const router = useHistory();
  const [hint, setHint] = useState("");
  const [level, setLevel] = useState("");
  const [subject, setSubject] = useState("");
  const [options, setOptions] = useState(tempOptions);
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <Wrapper>
      <Info className="level">
        <img src={elephant} alt="Cartoon elephant" className="image" />
        <div className="text">
          <span className="ageGroup textUpperCase">Level 1</span>
          <span className="subject">(English Language)</span>
        </div>
      </Info>
      <Info className="hint">
        <img src={bear} alt="Cartoon bear" className="image" />
        <div className="text">
          <span>Use the passage to answer the following question</span>
        </div>
      </Info>

      <button
        className="home flexRow alignCenter justifyCenter"
        onClick={() => router.push("/test")}
      >
        <img src={homeIcon} alt="Home" className="icon" />
      </button>

      <NavButton className="flexRow alignCenter justifyCenter circle prev">
        <img src={left_arrow} alt="Left Arrow" className="icon" />
      </NavButton>
      <NavButton className="flexRow alignCenter justifyCenter circle next">
        <img src={right_arrow} alt="Right Arrow" className="icon" />
      </NavButton>

      <Content className="flexColumn alignCenter">
        <Spacer y={13.2} />
        <p className="questionNumber textCenter textUpperCase">
          OUESTION 1 0F 4
        </p>
        <Spacer y={1.2} />
        <h3 className="passage textCenter">
          A bird hopped up to my window. I gave her some bread. She made a nest
          in my garden. Now I look after her little ones.
        </h3>
        <Spacer y={9.6} />
        <h4 className="title question textCenter">
          Where did the bird hop up to?{" "}
        </h4>
        <Spacer y={2.4} />
        <Options>
          {options?.map((option, index) => (
            <button
              key={index}
              className={`item t1 bold textUpperCase textLeft${
                selectedOption === option ? " selected" : ""
              }`}
              onClick={() => setSelectedOption(option)}
            >
              <span>{option}</span>
              <img src={bunny} alt="bunny" className="bunny" />
            </button>
          ))}
        </Options>
        <Spacer y={4.8} />
      </Content>
    </Wrapper>
  );
};

export default QuestionLayout;
