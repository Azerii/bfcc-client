import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useField } from "formik";

const Wrapper = styled.div`
  .fieldWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: ${(props) =>
      props.fieldStyle === "longText" ? "fit-content" : "5.6rem"};
    padding: ${(props) =>
      props.fieldStyle === "longText" ? "1.8rem 2.4rem" : "0 2.4rem"};
    border-bottom: 1px solid #4f4f4f;

    &.error {
      border-color: var(--accent_2_dark);
    }
  }

  .errorText {
    display: block;
    color: var(--accent_2_main);
    font-size: 14px;
    margin-top: 0.6rem;
  }

  input,
  textarea {
    display: block;
    color: var(--black_3);
    width: 100%;
    background-color: transparent;
    border: none;

    ::placeholder {
      color: var(--grey_5);
    }
  }

  textarea {
    height: 14.4rem;
  }

  label {
    display: block;
    color: var(--grey_5);
    margin-bottom: 5px;
  }
`;

const FormGroup = ({ fieldStyle, type, name, placeholder, required }) => {
  const [field, meta] = useField(name);
  const [showLabel, setShowLabel] = useState(false);

  const toggleLabel = (e) => {
    if (e.target.value.length > 0) {
      setShowLabel(true);
    } else {
      setShowLabel(false);
    }
  };

  return (
    <Wrapper fieldStyle={fieldStyle}>
      <div
        className={`fieldWrapper${meta.touched && meta.error ? " error" : ""}`}
      >
        {showLabel && <label htmlFor={name}>{placeholder}</label>}
        {fieldStyle === "shortText" && (
          <input
            {...field}
            className="textSmall"
            type={type || "text"}
            id={name}
            name={name}
            placeholder={placeholder}
            required={required || false}
            onBlur={(e) => {
              toggleLabel(e);
              field.onBlur(e);
            }}
            onChange={(e) => {
              toggleLabel(e);
              field.onChange(e);
            }}
          />
        )}
        {fieldStyle === "longText" && (
          <textarea
            className="textSmall"
            id={name}
            name={name}
            placeholder={placeholder}
            required={required || false}
            {...field}
          />
        )}
      </div>
      {meta.touched && meta.error && (
        <span className="errorText">{meta.error}</span>
      )}
    </Wrapper>
  );
};

FormGroup.propTypes = {
  fieldStyle: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  onChange: PropTypes.func,
};

export default FormGroup;
