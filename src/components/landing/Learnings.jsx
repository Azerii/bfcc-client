import Styled from "styled-components";
import Spacer from "components/Spacer";
import { Link } from "react-router-dom";
import Button from "./Button";
import groupAnimals from "assets/landing/groupAnimals.svg";

const Wrapper = Styled.div`
Height: 81.6rem;
background-color: var(--accent_4_lighter);
position: relative;

.learningsCaption {
    font-size: 9.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 8.4rem;
    text-align: center;
    color: var(--black_5); 
}

.active{
    color: var(--primary_main);
}

.learningsDescription{ 
    text-align: center;
    color: #404040;
}

.btnStart{
    margin: 0 auto;
}

.animals{
   
    margin: 0 5rem;
    top: -1rem;
}

@media(max-width: 768px) {

  height: auto;
  .learningsCaption {
    font-size:  3.6rem;
    line-height: 5.2rem;
  }

    .learningsDescription {
      font-size: 1.8rem;
      width: 60%;
      margin: auto;
      text-align: center;

      br {
        display: none;
      }
    }

    .animals{
      width: 37rem;
      top: -1rem;
      margin: auto;
  }
}
`;

const Learnings = ({ text }) => {
  return (
    <Wrapper className="section">
      <Spacer y={9.6} />
      <div className="learningsCaption">
        Testing that <br />
        identifies
        <span className="active">
          {" "}
          learning <br /> gaps.
        </span>
      </div>
      <Spacer y={2.4} />
      <div className="learningsDescription t1">
        Every child learns at their pace. Our assessment questions help to
        identify areas of improvement <br /> and provide essential support that
        guarantees growth.
      </div>
      <Spacer y={4.8} />
      <Link to="/register" className="startHere">
        <Button className="btnStart" text="start here" fullWidth big></Button>
      </Link>
      <Spacer y={9.6} />
      <img src={groupAnimals} alt="Animals" className="animals" />
    </Wrapper>
  );
};

export default Learnings;
