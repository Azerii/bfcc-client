import Spacer from "components/Spacer";
import Styled from "styled-components";
import Button from "./Button";
import rat from "assets/landing/rat.svg";
import { Link } from "react-router-dom";
import teacher from "assets/landing/teacher.png";

const Wrapper = Styled.div`
background-color: #FFEA9F;
height: 60rem;
position: relative;

.wrap {
    display: grid;
    grid-template-columns 2fr 1fr;
}
.miniWrapper{
    display: grid;
    grid-template-rows: 2fr;
    padding-top: 6.4rem;
}

.teacher{
    margin-top: 9.9rem;
    height: 40.1rem;
}

.rat {
position: absolute;
bottom: 2rem;
left: -1rem;
z-index: 2;
}

.offerAim {
    color: #404040;
    width: 100%;
}

.offerCaption{
    color: #003399;
}

.quiz {
    color: #7f4804
}

@media(max-width: 768px) {
    .teacher {
        display: none;
    }

    .rat {
        display: none;
    }

    .offerCaption {
        text-align: center;
        font-size: 3.6rem;
        line-height: 4.2rem;
    }
    .wrap {
        display: grid;
        grid-template-columns: 1fr;
    }

    .offerAim  {
        text-align: center;
        width: 70%;
        margin: auto; 
    }

    .btnStart {
        margin: auto;
    }
}
`;
const Offer = () => {
  return (
    <Wrapper className="container">
      <div className="wrap">
        <img src={teacher} alt="A teacher" className="teacher" />
        <div className="miniWrapper">
          <h1 className="offerCaption">
            Easy, <span className="quiz">engaging</span> and{" "}
            <span className="quiz">effective</span> learning through.
          </h1>
          <Spacer y={2.4} />
          <div className="offerAim t1">
            We provide real-time assessment with ready-to-go answers that help
            determine students’ strong points and areas of growth.
          </div>
          <Spacer y={4.8} />
          <Link to="/register" className="Enrol">
            <Button
              className="btnStart"
              text="Take test"
              long
              padding
              big
            ></Button>
          </Link>
          <Spacer y={13} />
        </div>
      </div>
      <img src={rat} alt="A rat reading" className="rat" />
    </Wrapper>
  );
};

export default Offer;
