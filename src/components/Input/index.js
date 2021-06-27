const Input = ({ type, label, placeholder }) => {
  return (
    <div className="formField">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} autoComplete="off" />
    </div>
  );
};
export default Input;
