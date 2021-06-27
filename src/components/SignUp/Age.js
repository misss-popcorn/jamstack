import PropTypes from "prop-types";

import Input from "../Input";

const Age = ({ name, onChange, form }) => {
  const handleOnChange = (e) => {
    const updatedForm = { ...form };
    updatedForm[e.target.name] = e.target.value;
    onChange(updatedForm);
  };
  return (
    <Input
      name={name}
      type="number"
      placeholder="Age in number"
      label="Email Address"
      onChange={handleOnChange}
    />
  );
};

Age.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
};

export default Age;
