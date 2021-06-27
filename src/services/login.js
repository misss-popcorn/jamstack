const Login = () => {
  const URL = "https://radiant-dusk-57430.herokuapp.com/api/auth/login";
  fetch(URL, {
    method: "POST", // POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: undefined,
  });
};
export default Login;
