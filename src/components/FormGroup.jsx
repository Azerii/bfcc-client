import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  width: 100%;
  height: ${(props) =>
    props.fieldStyle === "longText" ? "fit-content" : "5.6rem"};
  padding: ${(props) =>
    props.fieldStyle === "longText" ? "1.8rem 2.4rem" : "0 2.4rem"};
  border-bottom: 1px solid #4f4f4f;

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

const FormGroup = ({
  fieldStyle,
  type,
  name,
  placeholder,
  required,
  onChange,
}) => {
  const [showLabel, setShowLabel] = useState(false);

  const toggleLabel = (e) => {
    if (e.target.value.length > 0) {
      setShowLabel(true);
    } else {
      setShowLabel(false);
    }
    onChange(e);
  };

  return (
    <Wrapper fieldStyle={fieldStyle}>
      {fieldStyle === "shortText" && (
        <>
          <input
            className="textSmall"
            type={type || "text"}
            id={name}
            name={name}
            placeholder={placeholder}
            onBlur={toggleLabel}
            onChange={toggleLabel}
            required={required || false}
          />
          {showLabel && <label htmlFor={name}>{placeholder}</label>}
        </>
      )}
      {fieldStyle === "longText" && (
        <>
          <textarea
            className="textSmall"
            id={name}
            name={name}
            placeholder={placeholder}
            required={required || false}
          />
          {showLabel && <label htmlFor={name}>{placeholder}</label>}
        </>
      )}

      {!(fieldStyle === "shortText") && !(fieldStyle === "longText") && (
        <>
          <input
            className="textSmall"
            type={type || "text"}
            id={name}
            name={name}
            placeholder={placeholder}
            onBlur={toggleLabel}
            onChange={toggleLabel}
            required={required || false}
          />
          {showLabel && <label htmlFor={name}>{placeholder}</label>}
        </>
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
