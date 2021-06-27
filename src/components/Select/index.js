import PropTypes from "prop-types";

import "./index.scss";

const Select = ({ options, onChange, name }) => {
  return (
    <select onChange={onChange} name={name}>
      {options.map((option) => {
        return (
          <option key={option.key} value={options.value}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Select;
