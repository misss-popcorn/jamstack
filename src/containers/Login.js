import { Link } from "react-router-dom";

import OuterLogo from "../components/OuterLogo";
import Form from "../components/Form";
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";

import "./Login.scss";

import backGroundImage from "../images/login-bg.jpg";

const LoginContainer = () => {
  return (
    <div className="container">
      <div className="imageContainer">
        <img src={backGroundImage} alt="login-background" />
      </div>
      <div className="formContainer">
        <OuterLogo />
        <Form>
          <h1>Login</h1>
          <p>
            Don't have a account yet? <Link to="/signup">Sign Up</Link>
          </p>
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
          <Link to="#" className="forgotPassword">
            Forgot Password
          </Link>
          <div>
            <PrimaryButton text={"Login"} />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginContainer;
