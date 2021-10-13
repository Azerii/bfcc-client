import styled from "styled-components";
import logo from "assets/logo.svg";
import logo_dark from "assets/logo_dark.png";

const Wrapper = styled.div`
  width: max-content;

  img {
    height: 7.2rem;
  }
`;

export default function Logo({ black }) {
  return (
    <Wrapper>
      {!black && <img src={logo} alt="BFCC" />}
      {black && <img src={logo_dark} alt="BFCC" />}
    </Wrapper>
  );
}
