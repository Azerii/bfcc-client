import Spacer from "components/Spacer";
import Styled from "styled-components";

const Wrapper = Styled.div`
height: 38.4rem;
background-color: var(--primary_main);

.policyTextCaption {
    font-size: 9.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 8.4rem;
    text-align: center;
    color: var(--white); 
}

@media (max-width: 768px) {
  height: auto;

  .policyTextCaption {
    font-size: 3.6rem;
    line-height: 5.4rem;
    
}
`;

const PolicyText = () => {
  return (
    <Wrapper>
      <Spacer y={10.1} />
      <h2 className="policyTextCaption textCenter">Policy Privacy</h2>
      <Spacer y={19.8} />
    </Wrapper>
  );
};

export default PolicyText;
