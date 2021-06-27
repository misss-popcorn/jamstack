import * as React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import OuterLogo from "../components/OuterLogo";

import { useState, useEffect } from "react";

import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";

import "./Login.scss";

import backGroundImage from "../images/login-bg.jpg";

const LoginContainer = () => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [showError, setShowError] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (showError) setShowError(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginForm]);

  const handleOnChange = (e) => {
    const updatedForm = { ...loginForm };
    updatedForm[e.target.name] = e.target.value;
    setLoginForm(updatedForm);
  };

  const handleLogin = () => {
    console.log(loginForm);
    const fields = Object.keys(loginForm);
    for (const field of fields) {
      if (!loginForm[field]) {
        setShowError(true);
        return;
      }
    }

    history.push("/profile");
  };

  return (
    <div className="container">
      <div className="imageContainer">
        <img src={backGroundImage} alt="login-background" />
      </div>
      <div className="formContainer">
        <OuterLogo />
        <div className="form">
          <h1>Login</h1>
          <p>
            Don't have a account yet? <Link to="/signup">Sign Up</Link>
          </p>
          {showError && <div className="error">All fields are required</div>}

          <Input
            name="email"
            type="text"
            placeholder="Enter your email address"
            label="Email Address"
            onChange={handleOnChange}
            value={loginForm.email}
          />
          <Input
            name="password"
            type="password"
            placeholder="Enter your password"
            label="Password"
            onChange={handleOnChange}
            value={loginForm.password}
          />
          <Link to="#" className="forgotPassword">
            Forgot Password
          </Link>
          <div>
            <PrimaryButton text={"Login"} onClick={handleLogin} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
