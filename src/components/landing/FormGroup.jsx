import React from "react";
import { useFormik } from "formik";
import Styled from "styled-components";
import Button from "components/Button";
import Elephant from "assets/landing/Elephant.svg";
import globe from "assets/landing/globe.svg";
import tabGirl from "assets/landing/tabGirl.png";
import Spacer from "components/Spacer";

const Wrapper = Styled.div`
  position: relative;

  .fieldWrapper {
    padding: 0 2rem;
    border: 1px solid #EFEFEF;
    border-radius: 4px;
    width: 100%;
    height: 5.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
  }

  .fieldWrapperText {
    padding: 0 2rem;
    border: 1px solid #EFEFEF;
    border-radius: 4px;
    width: 100%;
    height: 9.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
  }

  input {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    border: none;
    background-color: transparent;
  }

  

  textarea {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    border: none;
    background-color: transparent;
  }

  label {
    color: var(--grey_6);
    margin-bottom: 0.6rem;
  }

  // #message { 
  //   padding: 1.6rem 2rem;
   
  // }

  .contactDescription {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    width: 40%;
   
  }

  form {
    display: flex;
    flex-direction: column;
  
  }

  .contactUsFormImage {
    display : grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 14rem;
    position: relative;
  }

  .error {
    color: red;
    margin-top: 0.6rem;
}

  .globe {
    width: 270px;
    height:382px;
    position: absolute;
    bottom: 200px;
    right: 118px;
    z-index: -1;
  }

  .tabgirl {
    width: 450px;
    height: 450px;
    position: relative;
    z-index: 2;
    right: 30px;
  }

  .elephant {
    width: 322px;
    height: 415px;
    position: absolute;
    bottom: 0;
    right: 3px;
    z-index: 3;
  }

  @media(max-width: 768px) {

    height: auto;

    .contactUsFormImage {
      grid-template-columns: 1fr;
    }
  
    .tabgirl,
    .elephant,
    .globe {
      display: none;
    }
  
    .form {
      padding-left: 0; 
    }

    .contactDescription {
      font-size: 16px;
      width: 85%;
      text-align: center;
      margin: auto;
    }

    
  }
  

`;

const onSubmit = (values) => {};

const validate = (values) => {
  // values.name values.emailAddress values.phoneNumber values.message
  // errors.name errors.emailAddress errors.phoneNumber errors.message
  // errors.name = 'This field os required'.

  let errors = {};
  if (!values.name) {
    errors.name = "This is required";
  }
  if (!values.emailAddress) {
    errors.emailAddress = "This is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailAddress)
  ) {
    errors.emailAddress = "Invalid email address";
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = "This is required";
  }
  if (!values.message) {
    errors.message = "This is required";
  }

  return errors;
};

const initialValues = {
  name: "",
  emailAddress: "",
  phoneNumber: "",
  message: "",
};

const FormGroup = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <Wrapper className="form-container">
      <Spacer y={9.8} />
      <div className="contactDescription container">
        Our team is happy to answer your questions. Fill out the form and we’ll
        be in touch as soon as possible.
      </div>
      <Spacer y={5.4} />
      <div className="contactUsFormImage">
        <form
          className="register-form container"
          onSubmit={formik.handleSubmit}
        >
          {/* {submitted ? <div class="success-message">Submitted!</div> : null} */}
          <div className="fieldWrapper">
            {formik.values.name && (
              <label htmlFor="name" className="name">
                Name
              </label>
            )}
            <input
              id="name"
              class="form-field"
              type="text"
              placeholder="Name"
              name="name"
              value={formik.values.name}
              onChange={(e) => {
                formik.handleChange(e);
              }}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
          <Spacer y={2.4} />
          <div className="fieldWrapper">
            {formik.values.emailAddress && (
              <label htmlFor="emailAddress" className="email">
                Email Address
              </label>
            )}
            <input
              id="email-address"
              class="form-field"
              type="text"
              placeholder="Email Address"
              name="emailAddress"
              value={formik.values.emailAddress}
              onChange={(e) => {
                formik.handleChange(e);
              }}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.emailAddress && formik.errors.emailAddress ? (
            <div className="error">{formik.errors.emailAddress} </div>
          ) : null}
          <Spacer y={2.4} />
          <div className="fieldWrapper">
            {formik.values.phoneNumber && (
              <label htmlFor="phoneNumber" className="phone">
                Phone Number
              </label>
            )}
            <input
              id="phone-number"
              class="form-field"
              type="text"
              placeholder="Phone Number"
              name="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={(e) => {
                formik.handleChange(e);
              }}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <div className="error">{formik.errors.phoneNumber}</div>
          ) : null}
          <Spacer y={2.4} />
          <div className="fieldWrapperText">
            {formik.values.message && (
              <label htmlFor="message" className="message">
                Message
              </label>
            )}
            <textarea
              id="message"
              class="form-field"
              type="text"
              placeholder="Message"
              name="message"
              value={formik.values.message}
              onChange={(e) => {
                formik.handleChange(e);
              }}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.message && formik.errors.message ? (
            <div className="error">{formik.errors.message}</div>
          ) : null}
          <Spacer y={2.4} />
          <Button className="btnForm" text="Submit" long maxWidth big></Button>
        </form>

        <div>
          <img src={tabGirl} alt=" A girl with a tab" className="tabgirl" />
          <img src={globe} alt="Globe" className="globe" />
        </div>
      </div>

      <img src={Elephant} alt="Elephant" className="elephant" />
      <Spacer y={17.2} />
    </Wrapper>
  );
};
export default FormGroup;
