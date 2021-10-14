import styled, { keyframes } from "styled-components";
import Layout from "./RegisterLayout";
import curly_yellow from "assets/curly_yellow.svg";
import curly_cyan from "assets/curly_cyan.svg";
import clouds from "assets/clouds.svg";
import stars from "assets/stars.svg";
import Spacer from "./Spacer";

const load = keyframes`
  0% {
    width: 0;
    opacity: 1;
  }

  // 20% {
  //   width: 20%;
  // }

  // 50% {
  //   width: 50%; 
  // }

  // 80% {
  //   width: 80%;
  // }

  80% {
    width: 80%;
    opacity: 1;
  }

  100% {
    width: 100%;
    opacity: 0;
  }
`;

const Wrapper = styled(Layout)`
  position: fixed;
  left: 0;
  top: 0;

  .clouds {
    width: 100%;
    bottom: -6rem;
    left: 0;
  }

  .stars {
    height: 21rem;
    bottom: 10.8rem;
    // left: 50%;
    // transform: translateX(-50%);
  }

  .progress {
    position: relative;
    width: 9.6rem;
    height: 1rem;
    border-radius: 10rem;
    background-color: #ffffff;
    overflow: hidden;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      width: 0;
      height: 100%;
      background-color: var(--primary_lighter);
      animation: ${load} 1.5s ease-in infinite;
    }
  }
`;

const Loader = ({ title, description }) => {
  return (
    <Wrapper className="flexColumn alignCenter">
      <img src={curly_yellow} alt="Curly" className="illustration topLeft" />
      <img src={curly_cyan} alt="Curly" className="illustration topRight" />
      <img src={stars} alt="Stars" className="illustration stars" />
      <img src={clouds} alt="Clouds" className="illustration clouds" />

      <div className="content flexColumn alignCenter">
        <Spacer y={21.6} />
        <div className="progress"></div>
        <Spacer y={1.6} />
        <h2 className="title textCenter">{title}</h2>
        <Spacer y={1.6} />
        <div className="description t1 textCenter">
          {description?.split("\n").map((text, index) => (
            <span key={index}>
              {text}
              <br />
            </span>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Loader;
