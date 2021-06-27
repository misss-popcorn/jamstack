import "./index.scss";
const Select = ({ options }) => {
  return (
    <select>
      {options.map((option) => {
        return <option key={option.key}>{option.name}</option>;
      })}
    </select>
  );
};
export default Select;
