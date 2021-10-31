import styled from "styled-components";

const RegisterLayout = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  background-color: var(--primary_darker);
  overflow: hidden;

  &.light {
    background-color: #fafafa;

    .title {
      color: var(--black_5);
    }

    .description {
      color: var(--grey_5);
    }

    .illustration {
      display: none;

      &.light {
        display: block;
      }
    }
  }

  .illustration {
    position: absolute;
    // border: 10px solid purple;
    z-index: 0;

    &.light {
      display: none;
    }
  }

  .topRight {
    top: 0;
    right: -4rem;
  }

  .topLeft {
    top: 0;
    left: -6rem;
  }

  .bottomRight {
    bottom: -10rem;
    right: 0;
  }

  .bottomLeft {
    bottom: -10rem;
    left: 0;
  }

  .title,
  .description {
    color: #ffffff;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    height: auto;

  }

  @media (max-width: 768px) {
     
    height: auto;
    .illustration {
      display: none;
    }

    .title {
      font-size: 2.5rem;
    }

    .description {
      font-size: 2rem;
      width: 70%;
      text-align: center;
      margin: auto;
    }

    &.light {
      
  
      .title {
        color: var(--black_5);
      }
  
      .description {
        color: var(--grey_5);
      }
  
      .illustration {
        display: none;
  
        &.light {
          display: none;
        }
      }
    }
  }
`;

export default RegisterLayout;
