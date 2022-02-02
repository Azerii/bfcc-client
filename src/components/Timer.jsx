import { useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1.6rem 2.4rem;
  background-color: #ffffff;
  border-radius: 8px;
  display: flex;
  gap: 1.6rem;
  flex-wrap: nowrap;
  position: fixed;
  top: 1.6rem;
  left: 50%;
  z-index: 23434242;
  transform: translateX(-50%);

  .val {
    color: #111111;
  }

  .separator {
    color: #666666;
  }

  @media screen and (max-width: 900px) {
    padding: 1rem 2.4rem;
  }
`;

const formatTimeVal = (val) => {
  return `0${Math.floor(val)}`.substr(-2);
};

const Timer = ({ time, setTime, handleTimeUp }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      if (time === 0) {
        handleTimeUp();
        return;
      }
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [time]);

  return (
    <Wrapper>
      <h4 className="val">{formatTimeVal(time / 3600)}</h4>
      <h4 className="separator">:</h4>
      <h4 className="val">{formatTimeVal(time / 60)}</h4>
      <h4 className="separator">:</h4>
      <h4 className="val">{formatTimeVal(time % 60)}</h4>
    </Wrapper>
  );
};

export default Timer;
