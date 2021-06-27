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

export default Gender;
