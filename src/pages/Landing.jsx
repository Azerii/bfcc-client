import Header from "components/landing/Header";
import React from "react";
import Evaluation from "components/landing/Evaluation";
import Interactions from "components/landing/Interactions";
// import Feedback  from 'components/Feedback';
import Offer from "components/landing/Offer";
import Learnings from "components/landing/Learnings";
import Footer from "components/landing/Footer";

const Landing = () => {
  return (
    <>
      <Header />
      <Evaluation />
      <Interactions />
      <Offer />
      {/* <Feedback /> */}
      <Learnings />
      <Footer />
    </>
  );
};
export default Landing;
