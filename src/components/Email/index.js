const Email = () => {
  return (
    <div className="formField">
      <label>Email Address</label>
      <input
        type="email"
        placeholder="Enter your email address"
        cache="clear"
        autoComplete="off"
      />
    </div>
  );
};

export default Email;
