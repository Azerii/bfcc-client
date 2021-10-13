import PropTypes from "prop-types";
import { DropdownWrapper } from "components/global/Dropdown";
import chevronDown from "assets/icons/chevronDown.svg";

const Dropdown = ({
  className,
  name,
  value,
  setValue,
  type,
  label,
  placeholder,
  list,
  readOnly,
  onChange = () => {},
}) => {
  const toggleList = (open) => {
    if (readOnly) return;

    open
      ? document.querySelector(`#${name}`).classList.add("isOpen")
      : document.querySelector(`#${name}`).classList.remove("isOpen");
  };

  const handleSelect = (e, l) => {
    e.preventDefault();
    e.stopPropagation();
    setValue(l);
    toggleList(false);

    onChange(l);
  };
  return (
    <DropdownWrapper id={name} className={`dWrapper ${className ?? ""}`}>
      <label htmlFor={name}>{label}</label>
      <div
        className="inputWrapper"
        onClick={() =>
          document.querySelector(`#${name}`).classList.toggle("isOpen")
        }
      >
        <input
          type={type || "text"}
          name={name}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          placeholder={placeholder}
          className="selectInput"
          readOnly
        />
        <img src={chevronDown} alt="down" className="toggleIcon" />
      </div>
      <div className="list">
        {!!list?.length &&
          list.map((item) => (
            <button
              key={item}
              className="listItem l3 colorBodyText"
              onClick={(e) => handleSelect(e, item.toString())}
            >
              {item}
            </button>
          ))}
      </div>
    </DropdownWrapper>
  );
};

Dropdown.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  list: PropTypes.array,
  hasIcon: PropTypes.bool,
  icon: PropTypes.any,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Dropdown;
