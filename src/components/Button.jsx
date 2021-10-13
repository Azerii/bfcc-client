import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  height: 5.6rem;
  width: ${(props) =>
    props.fullWidth ? "100%" : props.width ?? "fit-content"};
  padding: 0 4.4rem;
  background-color: ${(props) => props.bg ?? "var(--primary_main)"};
  color: ${(props) => props.color ?? "#ffffff"};
  font-size: 18px;
  font-style: normal;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  transition: background 0.2s ease-in;

  .icon {
    height: 2rem;
    margin-right: 1.2rem;
  }

  &:hover {
    background-color: var(--primary_dark);
  }

  &:disabled {
    opacity: 0.6;
    pointer-events: none;
  }
`;

const Button = ({
  className,
  bg,
  type,
  fullWidth,
  width,
  text,
  disabled,
  color,
  icon,
  as,
  href,
  onClick,
}) => {
  const styleProps = {
    className,
    bg,
    type,
    fullWidth,
    width,
    text,
    disabled,
    color,
    as,
    href,
    onClick,
  };
  return (
    <Wrapper {...styleProps}>
      {icon && <img src={icon} alt="icon" className="icon" />}
      <span>{text}</span>
    </Wrapper>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
  bg: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  width: PropTypes.string,
  fullWidth: PropTypes.bool,
  icon: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
