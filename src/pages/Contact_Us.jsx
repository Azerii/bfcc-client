import React from "react";
import FormGroup from "components/landing/FormGroup";
import Navbar from "components/landing/Navbar";
import ContactText from "components/landing/ContactText";
import Footer from "components/landing/Footer";

const Contact_Us = () => {
  return (
    <div>
      <Navbar />
      <ContactText />
      <FormGroup />
      <Footer />
    </div>
  );
};

export default Contact_Us;
