import React, { useEffect, useRef, useState } from "react";
import "../Styles/LoginWeb.css";
import "../Styles/Otpvierify.css";
import { TrueLogo } from "../Assets";
// import {Nav}
let custom_index :number = 0

function OTPverfiy() {
  const [otp,setOtp] = useState<string[]>(new Array(6).fill(""))
  const [activeotp , setActiveOtp] = useState<number>(0)
  const inputRef = useRef<HTMLInputElement>(null)
  // const navigate = useNavigate()
  const handleOTp = (e :any) => {

    const {value} = e.target
    const newOtp :string[] = [...otp]
    newOtp[custom_index] = value.substring(value.length-1)
    setOtp(newOtp)
    if(!value) {setActiveOtp(custom_index-1)}
    else {setActiveOtp(custom_index+1)}
  }
  const handleKeyDown = ({key} :React.KeyboardEvent<HTMLInputElement> , index :number) => {
    custom_index = index
    if (key === "Backspace"){
      setActiveOtp(custom_index -1)
    }
  }
  const handle_login = () => {

  }
  useEffect(() => {
    inputRef.current?.focus()
  },[activeotp])
  // console.log(otp);
  
  return (
    <div className="body">
      <div className="center_div main_div">
        <div className="uppder_div div_2">
          <img src={TrueLogo} />
        </div>

        <div className="middle_div">
          <div className="second_div authentication_div">
            <h1>Two factor authentication</h1>
          </div>
          <div className="text_div">
            <p>Enter the verification code we sent to someone@g*******</p>
          </div>
        </div>

        <div className="third_div">
        <form >
          <p>00:00</p>
          <div className="all_opts">
          {otp.map((digit, idx) => (
        <input
          key={idx}
          ref={idx === activeotp ? inputRef : null}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          pattern="\d{1}"
          className="otp_input_box"
          onChange={handleOTp}
          onKeyDown={(e) => handleKeyDown(e,idx)}
          value={otp[idx]}
        />
      ))}
          </div>
          <div className="resend_button">
            <button className="just_button">Resend</button>
          </div>
          </form>
        </div>

        <div className="last_div">
            <div className="Login-button submit_button">Submit</div>
            <div className="login" onClick={handle_login} >Login</div>
        </div>
      </div>
    </div>
  );
}

export default OTPverfiy;
