const signup = () => {
  const URL = "https://radiant-dusk-57430.herokuapp.com/api/auth/register";
  fetch(URL, {
    method: "POST", // POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      email: "user@gmail.com",
      name: "Firstname Lastname",
      age: "25",
      gender: 0,
      password: "password",
    },
  });
};
export default signup;
