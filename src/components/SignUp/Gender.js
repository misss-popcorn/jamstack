import Select from "../Select";

const Gender = () => {
  const options = [
    { name: "Male", key: "male" },
    { name: "Female", key: "female" },
  ];
  return (
    <div className="formField">
      <label>Gender</label>
      <Select options={options} />
    </div>
  );
};

export default Gender;
