import Styled from "styled-components";
import logo from "assets/logo.svg";
import Spacer from "components/Spacer";
import Button from "./Button";
import { Link } from "react-router-dom";

const Wrapper = Styled.div`
  Height: 9.6rem;
  background-color: var(--primary_main);
  position : relative;

  .logo {
      width: 7.3rem;
      height: 7.2rem;
  }

  @media(max-width: 768px) {
    height: auto;
  }
`;

const Navbar = () => {
  return (
    <Wrapper className="section">
      <Spacer y={1.6} />
      <div className={`container flexRow alignCenter justifySpaceBetween`}>
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <Link to="/register" className="startHere">
          <Button
            className="btn"
            text="Start here"
            padding
            maxWidth
            big
            white
          ></Button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Navbar;
