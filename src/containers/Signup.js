import { Link } from "react-router-dom";

import OuterLogo from "../components/OuterLogo";
import Form from "../components/Form";
import Email from "../components/Email";
import Password from "../components/Password";
import FullName from "../components/SignUp/FullName";
import Age from "../components/SignUp/Age";
import Gender from "../components/SignUp/Gender";
import PrimaryButton from "../components/PrimaryButton";

import "./Signup.scss";

import backGroundImage from "../images/register-bg.jpg";

const SignupContainer = () => {
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
          <FullName />
          <Email />
          <Password />
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
