import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  background-color: var(--accent_2_light);
  overflow: hidden;

  .home {
    position: fixed;
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

  .nextSection {
    position: fixed;
    right: 9.6rem;
    bottom: 4.8rem;
  }

  .questionImage {
    height: 40rem;
  }

  .passage {
    line-height: 48px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    height: auto;
  }

  @media (max-width: 768px) {
    height: auto;

    .home {
      top: 2.4rem;
      left: 1rem;
      height: 3.6rem;
      width: 3.6rem;

      &::after {
        height: 2.4rem;
        width: 2.4rem;
      }

      .icon {
        height: 1.6rem;
      }
    }

    .nextSection {
      position: absolute;
      bottom: 2.4rem;
      right: 50%;
      transform: translateX(50%);
    }
  }
`;

export const Info = styled.div`
  position: absolute;
  z-index: 0;
  pointer-events: none;

  &.level {
    position: fixed;
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

  @media (min-width: 769px) and (max-width: 1024px) {
    margin-top: 5rem;
    height: auto;

    &.level {
      top: 0;
    }
  }

  @media (max-width: 900px) {
    &.level {
      position: absolute;
      height: auto;
      width: max-content;
      top: 2.4rem;
      left: 50%;
      transform: translateX(-50%);

      .text {
        position: relative;
        top: unset;
        left: unset;
        max-width: unset;
      }
  
        .image {
          display: none;
        }
      }
  
      &.hint {
        display: none;
      }
    }
  }
`;

export const NavButton = styled.button`
  position: fixed;
  top: 45vh;
  background-color: #ffffff;
  height: 9.6rem;
  width: 9.6rem;
  padding: 0.8rem;
  z-index: 2;

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
    height: 100%;
  }

  @media (max-width: 767.89px) {
    height: 3.6rem;
    width: 3.6rem;

    &.prev {
      left: 1rem;
    }

    &.next {
      right: 1rem;
    }
  }

  @media (width: 768px) {
    height: 5rem;
    width: 5rem;

    &.prev {
      left: 2.4rem;
    }

    &.next {
      right: 2.4rem;
    }
  }
`;

export const Content = styled.div`
  width: 60vw;
  margin: auto;

  .passage {
    color: var(--black_2);
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    height: auto;
    margin-top: 13rem;
    width: 80vw;
    line-height: 20px;
  }

  @media (max-width: 768px) {
    margin-top: 5rem;
    width: 70vw;
  }
`;

export const Options = styled.div`
  width: 39rem;
  margin: auto;
  display: none;

  &.show {
    display: block;
  }

  .item {
    min-height: 6rem;
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

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 5.6rem;

    .item {
      font-size: 14px;
      border-width: 2px;
    }
  }
`;

export const AudioGroup = styled.div`
  .pig {
    height: 20rem;
  }

  .wave {
    height: 9.6rem;
  }

  @media (max-width: 768px) {
    .pig {
      margin-left: 8rem;
      width: 8rem;
    }

    .wave {
      margin-right: 8rem;
    }
  }
`;
