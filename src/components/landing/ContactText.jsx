import Spacer from "components/Spacer";
import Styled from "styled-components";

const Wrapper = Styled.div`
Height: 38.4rem;
background-color: var(--primary_main);

.contactTextCaption {
    font-size: 9.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 8.4rem;
    text-align: center;
    color: var(--white); 
}

@media(max-width: 768px) {

  height: auto;

  .contactTextCaption {
    font-size: 3.6rem;
    
}
}

`;

const ContactText = () => {
  return (
    <Wrapper>
      <Spacer y={10.1} />
      <h2 className="contactTextCaption textCenter">Contact </h2>
      <Spacer y={19.8} />
    </Wrapper>
  );
};

export default ContactText;
