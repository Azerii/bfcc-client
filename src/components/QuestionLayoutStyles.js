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
    height: 14.4rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    height: auto;

    .nextSection {
      display: none;
    }

    .nextSectionMobile {
      position: fixed;
      right: 4.6rem;
      bottom: 1rem;
    }
  }

  @media (max-width: 768px) {
    height: auto;

    .home {
      top: 2rem;
      left: 3rem;
    }

    .nextSection {
      display: none;
    }

    .nextSectionMobile {
      position: fixed;
      right: 4.6rem;
      bottom: 1rem;
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
      .text {
        display: none;
      }

      .ageGroup {
        position: absolute;
        display: flex;
        flex-direction: column;
        line-height: 20px;
        height: 3rem;
        width: 100%;
        font-size: 3rem;
        color: #ffffff;
        font-weight: 800;
        padding-left: 2rem;
        margin: auto;
        right: 30rem;
      }

      .subject {
        position: absolute;
        display: flex;
        flex-direction: column;
        height: 3rem;
        width: 100%;
        font-size: 3rem;
        color: #ffffff;
        font-weight: 800;
        padding-left: 2rem;
        margin: auto;
        top: 5rem;
        right: 35.5rem;
      }

      .image {
        display: none;
      }
    }

    &.hint {
      display: none;
    }
  }

  @media (max-width: 768px) {
    &.level {
        .text {
          display: none;
        }
  
        .ageGroup {
          position: relative;
          display: flex;
          flex-direction: column;
          line-height: 15px;
          height: 3rem;
          width: 37rem;
          font-size: 2.2rem;
          color: #ffffff;
          font-weight: 800;
        //   padding-left: 2rem
          margin: auto;
          
        }
  
        .subject {
          position: relative;
          display: flex;
          flex-direction: column;
          height: 4rem;
          width: 40rem;
          font-size: 2rem;
          color: #ffffff;
          font-weight: 800;
        //   padding-left: 2rem;
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
  // transform: translateY(-50vh);
  background-color: #ffffff;
  height: 9.6rem;
  width: 9.6rem;
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
    height: 7.2rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    height: auto;

    position: fixed;
    top: 45vh;
    // transform: translateY(-50vh);
    background-color: #ffffff;
    height: 8rem;
    width: 8rem;
    z-index: 2;

    &:disabled {
      opacity: 0.6;
      pointer-events: none;
    }

    &.prev {
      left: 1rem;
    }

    &.next {
      right: 1rem;
    }

    .icon {
      height: 4rem;
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 45vh;
    // transform: translateY(-50vh);
    background-color: #ffffff;
    height: 5rem;
    width: 5rem;
    z-index: 2;

    &:disabled {
      opacity: 0.6;
      pointer-events: none;
    }

    &.prev {
      left: 1rem;
    }

    &.next {
      right: 1rem;
    }

    .icon {
      height: 3rem;
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

  @media (max-width: 768px) {
    width: 70vw;
    line-height: 20px;
    margin-bottom: 3rem;

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
