import Spacer from "./Spacer";
import Styled from "styled-components";
import quote from "assets/landing/quote.svg";
import Star from "assets/landing/Star.svg";
import bgFeedback from "assets/landing/bgFeedback.svg";

const Wrapper = Styled.div`
position: relative;
background: transparent;
height: 90rem;

.coverImage {
    position: absolute;
    z-index: -1;
    min-width: 100%;
    min-height: 100%;
}



.feedbackWrapper {
    z-index: 2;
    position: relative;
}

.feedbackCaption{
    padding-top: 9.6rem;
}

.card {
    position: relative;
    padding: 2.3rem;
    z-index: 2;
    box-shadow: 0px 1px 35px 0px #00000008;
    border-radius: 1.6rem;
    background-color: var(--white);
    Width: 100%; 
    Height:45.3rem;
}
.feedbackCards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 4.8rem;
    margin: 7.6rem 15rem 0 15rem;

}

.quotes{
    position: absolute;
    top: -3rem;
    left: 10rem;
}
.feedbackQuotes{
    padding: 4.4rem 3.5rem 1.7rem 3.5rem;
    width: 100%;

}
.stars {
    margin-left: auto;
    margin-right: auto;
    padding: 0 8rem 1.4rem 8rem;
}

.feedbackParagraph {
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    width:90%;
}

@media (max-width: 768px) {
    height: auto;

    .feedbackCaption {
        font-size: 3.6rem;
    }

    .feedbackCards {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 4.8rem;
        margin: 8rem  auto;
    
    }
    .coverImage {
        display: none;
    }
}
`;

const Feedback = () => {
  return (
    <Wrapper className="feedbackWrapper">
      <Spacer y={9.6} />
      <img src={bgFeedback} alt="Cover" className="coverImage" />
      <h2 className="feedbackCaption textCenter">
        What learners and <br /> parents are saying{" "}
      </h2>
      <Spacer y={2.4} />
      <div className="miniFeedbackCaption t1 textCenter">Hear it from them</div>
      <div className="feedbackCards">
        <div className="card">
          <img src={quote} alt="Two Quotes" className="quotes" />
          <Spacer y={2.4} />
          <h4 className="feedbackQuotes textCenter">BEST ASSESSMENT SYSTEM</h4>
          <img src={Star} alt="Stars" className="stars" />
          <div className="feedbackParagraph">
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat
            incididunt sint deserunt ut voluptate aute id deserunt nisi.
          </div>
        </div>
        <div className="card">
          <img src={quote} alt="Two Quotes" className="quotes" />
          <Spacer y={2.4} />
          <h4 className="feedbackQuotes textCenter">BEST ASSESSMENT SYSTEM</h4>
          <img src={Star} alt="Stars" className="stars" />
          <div className="feedbackParagraph">
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat
            incididunt sint deserunt ut voluptate aute id deserunt nisi.
          </div>
        </div>
        <div className="card">
          <img src={quote} alt="Two Quotes" className="quotes" />
          <Spacer y={2.4} />
          <h4 className="feedbackQuotes textCenter">BEST ASSESSMENT SYSTEM</h4>
          <img src={Star} alt="Stars" className="stars" />
          <div className="feedbackParagraph">
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat
            incididunt sint deserunt ut voluptate aute id deserunt nisi.
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Feedback;
