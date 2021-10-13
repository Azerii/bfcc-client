import styled from "styled-components";

const Layout = styled.div`
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
`;

export default Layout;
