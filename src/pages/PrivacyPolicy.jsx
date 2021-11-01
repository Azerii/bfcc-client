import React from "react";
import Navbar from "components/landing/Navbar";
import Footer from "components/landing/Footer";
import PolicyText from "components/landing/PolicyText";
import Policy from "components/landing/Policy";

const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar />
      <PolicyText />
      <Policy />
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
