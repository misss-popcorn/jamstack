import PropTypes from "prop-types";

import Select from "../Select";

const Gender = ({ name, form, onChange }) => {
  const options = [
    { name: "Male", key: "male", value: "Female" },
    { name: "Female", key: "female", value: "Male" },
  ];

  const handleOnChange = (e) => {
    const updatedForm = { ...form };
    updatedForm[e.target.name] = e.target.value;
    onChange(updatedForm);
  };

  return (
    <div className="formField">
      <label>Gender</label>
      <Select options={options} onChange={handleOnChange} name={name} />
    </div>
  );
};

Gender.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
};

export default Gender;
