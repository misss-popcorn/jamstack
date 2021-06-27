import * as React from "react";
import PropTypes from "prop-types";
const Input = ({ type, label, name, placeholder, onChange, value }) => {
  return (
    <div className="formField">
      <label>{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default Input;
