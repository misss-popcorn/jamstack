import { Link } from "react-router-dom";

import OuterLogo from "../components/OuterLogo";
import Form from "../components/Form";
import Input from "../components/Input";
import Age from "../components/SignUp/Age";
import Gender from "../components/SignUp/Gender";
import PrimaryButton from "../components/PrimaryButton";

import "./Signup.scss";

import signup from "../services/signup";

import backGroundImage from "../images/register-bg.jpg";
import { useEffect } from "react";

const SignupContainer = () => {
  useEffect(() => {
    signup();
  }, []);
  return (
    <div className="container">
      <div className="imageContainer">
        <img src={backGroundImage} alt="login-background" />
      </div>
      <div className="formContainer">
        <OuterLogo />
        <Form>
          <h1>Register</h1>
          <p>
            Already have an account? <Link to="/login">LogIn</Link>
          </p>
          <Input
            type="text"
            placeholder="First and last name"
            label="Full Name"
          />
          <Input
            type="text"
            placeholder="Enter your email address"
            label="Email Address"
          />
          <Input
            type="password"
            placeholder="Enter your password"
            label="Password"
          />
          <Gender />
          <Age />

          <div>
            <PrimaryButton text={"Register"} />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignupContainer;
