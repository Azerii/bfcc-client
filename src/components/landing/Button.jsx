import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 2rem;
  align-items: center;
  border: none;
  padding: ${(props) =>
    props.padding
      ? "2.2rem 3.6rem"
      : props.maxPad
      ? "2.2rem 8rem"
      : "2.2rem 8.4rem"};
  outline: none;
  height: ${(props) => (props.big ? "6.4rem" : "4.8rem")};
  width: ${(props) =>
    props.fullWidth ? "14.4rem" : props.maxWidth ? "100%" : "max-content"};
  background-color: ${(props) =>
    props.white ? "var(--accent_1_main)" : "var(--primary_main)"};
  color: ${(props) =>
    props.color ? props.color : props.white ? "var(--black_4)" : "#ffffff"};

  .text {
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2rem;
    white-space: nowrap;
    text-align: center;
    width: max-content;
    height: 2rem;
  }

  @media screen and (max-width: 768px) {
    height: 4.8rem;
  }
`;

const Button = ({ text, ...props }) => {
  return (
    <Wrapper {...props}>
      <span className="text">{text}</span>
    </Wrapper>
  );
};

export default Button;
