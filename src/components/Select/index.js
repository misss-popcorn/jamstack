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
export default Select;
