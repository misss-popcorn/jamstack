import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import OuterLogo from "../components/OuterLogo";
import Input from "../components/Input";
import Age from "../components/SignUp/Age";
import Gender from "../components/SignUp/Gender";
import PrimaryButton from "../components/PrimaryButton";

import "./Signup.scss";

import backGroundImage from "../images/register-bg.jpg";
import { useEffect } from "react";

const SignupContainer = () => {
  const [signupForm, setSignupForm] = useState({
    email: "",
    password: "",
    gender: "Male",
    age: "",
  });
  const [showError, setShowError] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setShowError(false);
  }, [signupForm]);

  const handleFormChange = (updatedLoginForm) => {
    setSignupForm(updatedLoginForm);
  };

  const handleOnChange = (e) => {
    const updatedForm = { ...signupForm };
    updatedForm[e.target.name] = e.target.value;
    handleFormChange(updatedForm);
  };

  const handleSignup = () => {
    const fields = Object.keys(signupForm);
    for (const field of fields) {
      if (!signupForm[field]) {
        setShowError(true);
        return;
      }
    }
    history.push("/login");
  };

  return (
    <div className="container">
      <div className="imageContainer">
        <img src={backGroundImage} alt="login-background" />
      </div>
      <div className="formContainer">
        <OuterLogo />
        <div className="form">
          <h1>Register</h1>
          <p>
            Already have an account? <Link to="/login">LogIn</Link>
          </p>
          {showError && <div className="error">All fields are required</div>}
          <Input
            name="fullName"
            type="text"
            placeholder="First and last name"
            label="Full Name"
            onChange={handleOnChange}
          />
          <Input
            name="email"
            type="text"
            placeholder="Enter your email address"
            label="Email Address"
            onChange={handleOnChange}
          />
          <Input
            name="password"
            type="password"
            placeholder="Enter your password"
            label="Password"
            onChange={handleOnChange}
          />
          <Gender name="gender" onChange={handleFormChange} form={signupForm} />
          <Age name="age" onChange={handleFormChange} form={signupForm} />

          <div>
            <PrimaryButton text={"Register"} onClick={handleSignup} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupContainer;
