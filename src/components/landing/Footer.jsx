import Styled from "styled-components";
import Spacer from "components/Spacer";
import { Link } from "react-router-dom";

const Wrapper = Styled.div`
  background-color: var(--primary_main);
  color: #fff;
  height: 47.2rem;
  position: relative;

  .bottom {
      border-top: 1px solid white;
  }

  .footerCopyright, .link {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  white-space: nowrap;
  }

  @media(max-width: 768px) {

    .flexRow {
        flex-direction: column;
    }

    .footerCaption {
        width: 100%;
        font-size: 10px;
    }

    .footerCopyright{
        font-size: 14px;
    }

    .bottom {
      text-align: center;
    }

  }  
`;

const Footer = () => {
  return (
    <Wrapper className="container">
      <Spacer y={9.6} />
      <div className="footerContact p1 flexRow alignCenter justifyCenter">
        <Link to="/" className="link">
          Home
        </Link>
        <Spacer x={4.8} yMobile={1.2} />
        <Link to="/contact-us" className="link">
          Contact Us
        </Link>
        <Spacer x={4.8} yMobile={1.2} />
        <Link to="/faq" className="link">
          Help/FAQ
        </Link>
      </div>
      <Spacer y={14.4} yMobile={4.8} />
      <div className="bottom">
        <Spacer y={9.6} yMobile={4.8} />
        <div className="footerCaption flexRow justifySpaceBetween">
          <div className="footerCopyright">
            Copyright © 2021 BFCC, Inc. All rights reserved.
          </div>
          <Spacer yMobile={1.2} />
          <Link to="/policy-privacy" className="link">
            Privacy policy
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
export default Footer;
