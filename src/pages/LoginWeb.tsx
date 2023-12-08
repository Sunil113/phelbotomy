import React from "react";
import "../../src/Styles/LoginWeb.css";
import OTPverfiy from "./OTPverfiy";
import { TrueLogo } from "../../src/Assets";
import { BrowserRouter , Routes , Route , Link ,useNavigate } from 'react-router-dom';

// import image from ""
function LoginWeb() {
  const navigate = useNavigate()
  const handleloign = () => {
    navigate("/verify-otp")
  }
  return (
    <div className="body">
      <div className="center_div">
        <div className="uppder_div">
          <img src={TrueLogo} />
          <h1>Login</h1>
        </div>
        <div className="second_div">
        <form className="lower_div_login">
            <label htmlFor="email">Email:</label>
            <input className="input_filed" id="email" placeholder="example@gmail.com" />
            <label htmlFor="password">Password:</label>
            <input className="input_filed" id="password" type="password" placeholder="password" />
        </form>
        <Link className="forgot_password" to="/forgot-password"  >Forgot Password</Link>
        <button className="Login-button" onClick={handleloign} >Login</button>

        </div>

      </div>
    </div>
  );
}

export default LoginWeb;
