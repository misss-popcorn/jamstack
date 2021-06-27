import * as React from "react";

const Input = ({ type, label, name, placeholder, onChange, form, value }) => {
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
export default Input;
