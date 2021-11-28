import styled from "styled-components";
import Backdrop from "./Backdrop";
import Spacer from "./Spacer";
import lion from "assets/lion.svg";

const Wrapper = styled(Backdrop)`
  background-color: #11111160;

  .card {
    width: 48rem;
    padding: 4.8rem;
    background-color: #ffffff;
    border-radius: 2rem;
  }

  .image {
    width: 70%;
  }

  .btn {
    height: 5.6rem;
    min-width: 16.3rem;
    border-radius: 2rem;
    padding: 0 2.4rem;
    text-transform: capitalize;

    &.cancel {
      background-color: var(--white);
      color: var(--body_text);
      border: 1px solid #efefef;
    }

    &.actionBtn {
      background-color: var(--primary_main);
      color: #ffffff;
    }
  }

  @media screen and (max-width: 768px) {
    .card {
      width: 90%;
    }

    .image {
      width: 100%;
    }

    .btn {
      min-width: unset;
    }
  }
`;

const ConfirmModal = ({
  prompt,
  description,
  actionText,
  callback,
  warning,
}) => {
  return (
    <Wrapper
      id={"confirmModal"}
      className="confirmModal flexRow alignCenter justifyCenter"
    >
      <div className="card flexColumn alignCenter">
        {!warning && <img src={lion} alt="warning" className="image" />}
        <Spacer y={2.4} />
        <h4 className="colorGrey1 textCenter title">{prompt}</h4>
        <Spacer y={1.2} />
        <p className="l2 colorBodyText textCenter description">{description}</p>
        <Spacer y={4.8} />
        <div className="flexRow">
          <button
            className="btn cancel flexRow alignCenter justifyCenter p1"
            onClick={() =>
              document.querySelector(".confirmModal").classList.remove("show")
            }
          >
            Cancel
          </button>
          <Spacer x={2.4} />
          <button
            className="btn actionBtn flexRow alignCenter justifyCenter p1"
            onClick={
              warning ? () => window.location.replace("/register") : callback
            }
          >
            {actionText}
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default ConfirmModal;
