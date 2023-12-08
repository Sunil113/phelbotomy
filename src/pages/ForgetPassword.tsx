import React from "react";
import "../../src/Styles/LoginWeb.css";
import "../Styles/ForgotPassword.css"
import { TrueLogo } from "../Assets";
function ForgetPassword() {
  return (
    <div className="body">
      <div className="center_div forgot_password_div">
        <div className="uppder_div">
          <img src={TrueLogo} />
          <h1>Enter Email ID</h1>
        </div>
        <div>
            <form className="lower_div email_div">
                <label htmlFor="email">Email:</label><br/>
                <input className="input_filed" placeholder="example@gmail.com"/>
            </form>
            <div className="Next-button">
            <button>Next</button>
            </div>
            <div className="login"><a  className="Login_link" href="/">Login</a></div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
