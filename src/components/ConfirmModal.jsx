import styled from "styled-components";
import Backdrop from "./Backdrop";
import Spacer from "./Spacer";

const Wrapper = styled(Backdrop)`
  .card {
    width: 48rem;
    padding: 4.8rem;
    background-color: var(--white);
    border-radius: 0.8rem;
  }

  .btn {
    height: 4.8rem;
    min-width: 14.4rem;
    border-radius: 0.8rem;
    padding: 0 2.4rem;
    text-transform: capitalize;

    &.cancel {
      background-color: var(--white);
      color: var(--body_text);
      border: 1px solid var(--body_text);
    }

    &.actionBtn {
      background-color: var(--danger);
      color: var(--white);
    }
  }
`;

const ConfirmModal = ({ id, action, description, actionText, image }) => {
  return (
    <Wrapper
      id={id || "confirmModal"}
      className="confirmModal flexRow alignCenter justifyCenter"
    >
      <div className="card flexColumn alignCenter">
        <img src={image} alt="warning" className="image" />
        <Spacer y={1.2} />
        <h5 className="colorGrey1 textCenter title">
          Are you sure you want to
          <br />
          {action}?
        </h5>
        <Spacer y={1.2} />
        <p className="l2 colorBodyText textCenter description">{description}</p>
        <Spacer y={2.4} />
        <div className="flexRow">
          <button
            className="btn cancel flexRow alignCenter justifyCenter"
            onClick={() =>
              document.querySelector(".confirmModal").classList.remove("show")
            }
          >
            Cancel
          </button>
          <Spacer x={2.4} />
          <button className="btn actionBtn flexRow alignCenter justifyCenter">
            {actionText}
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default ConfirmModal;
