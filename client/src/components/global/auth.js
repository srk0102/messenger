//Importing react from react module
import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import axios from 'axios'

//Importing reusable components
import Logo from "../reusable/logo/logo"
import Custominput from '../reusable/CustomInput/custominput'
import Dashboard from "../global/dashboard"

/**
 * this function create signup form
 * Functino exported as default
 * @returns signup form
 */
export default function Auth() {
  const [userName, setUserName] = useState("")
  const [userErr, setUserErr] = useState("")
  const [phone, setPhone] = useState("")
  const [phoneErr, setPhoneErr] = useState("")
  const [isVerified, setVerify] = useState(false)
  const [otp, setOtp] = useState("")
  const [otpErr, setOtpErr] = useState("")
  const [authDone, setDone] = useState(false)

  /**
   * this function is to validate User Name.
   * @param {String} userName
   * @retrun returns the value of input element.
   */
  const validateUserName = (event) => {
    if (event.target.value === "") {
      setUserName("")
      setUserErr("*Please fill this field")
    } else {
      setUserErr("")
      setUserName(event.target.value)
    }
  }

  /**
   * this function is to validate Phone Number.
   * @param {string} phoneNumber
   * @return returns the value of input element.
   */
  const validatePhone = (event) => {
    if (event.target.value === "") {
      setPhoneErr("*Please fill this field")
    } else {
      setPhoneErr("")
      setPhone(event.target.value)
    }
  }

  /**
   * 
   */
  const validateOtp = (event) => {
    if (event.target.value === "") {
      setOtp("")
      setOtpErr("*Please fill this field")
    } else {
      setOtpErr("")
      setOtp(event.target.value)
    }
  }

  /**
   * 
   */
  const verify = () => {
    if (phone !== "" && otp !== "") {
      if (otp === "1234") {
        setOtp("")
        setUserName("")
        setVerify(true)
        axios.post('http://localhost:5000/login', [{ phoneNumber: phone }])
          .then(function (res) {
            if (res.data === "User Found") {
              setDone(true)
            }
          })
          .catch(function (res) {
            setDone(false)
            console.log("verf catch", res)
          })
      } else {
        setVerify(false)
      }
    } else {
      if (otp === "") {
        setOtpErr("*Please fill this field")
      } else {
        setOtpErr("")
      }
      if (phone === "") {
        setPhoneErr("*Please fill this field")
      } else {
        setPhoneErr("")
      }
    }
  }

  /**
   * this function is to send data to the server
   * @param {Object} data
   * @returns {Boolean} if data is submitted returns true or false
   */
  const submit = () => {
    let body = { userName, phone }
    if (userName !== "" && phone !== "") {
      axios.post('http://localhost:5000/signup', [{ phoneNumber: phone, userName: userName }])
        .then(function (res) {
          setDone(true)
          console.log("then", res)
        })
        .catch(function (res) {
          setDone(false)
          console.log("catch", res)
        })
    } else {
      if (userName === "") {
        setUserErr("*Please fill this field")
      } else {
        setUserErr("")
      }
      if (phone === "") {
        setPhoneErr("*Please fill this field")
      } else {
        setPhoneErr("")
      }
    }
  }

  return (
    <>
      {authDone === false ? (
        <>
          <div className="bg" style={{ backgroundColor: "#090e11", height: "100vh" }}>
            <div className="top p-3 d-flex flex-row w-100" style={{ height: "35vh", backgroundColor: "#00bfa5", position: "absolute" }}>
              <Logo name="fa-3x m-3 ms-5" color="white" />
              <h1 className="fw-bold mt-4 text-light" style={{ fontSize: "20px" }}>WHATSAPP WEB</h1>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center" style={{ zIndex: "1", height: "100vh" }}>
            <div className="card w-50 shadow-lg p-3">
              <Logo name="fa-5x text-center m-3" />
              {isVerified === false ? (
                <>
                  <PhoneInput placeholder="Enter phone number" value={phone} onChange={setPhone} onBlur={(event) => validatePhone(event)} className="form-control mt-2 shadow" />
                  <p className="text-start fw-bold m-2" style={{ fontSize: "10px", color: "red" }}>{phoneErr}</p>
                  <Custominput type="text" className="shadow" label="Enter Otp" theme="black" err={otpErr} onChange={(event) => validateOtp(event)} value={otp} />
                  <div className="d-flex flex-row justify-content-center">
                    <button className="btn btn-dark shadow" onClick={verify} style={{ backgroundColor: "#00bfa5", border: "0px" }}>Verify</button>
                  </div>
                </>
              ) : (
                <>
                  <PhoneInput placeholder="Enter phone number" value={phone} className="form-control mt-2 shadow" disabled />
                  <p className="text-start fw-bold m-2" style={{ fontSize: "10px", color: "red" }}>{phoneErr}</p>
                  <Custominput type="text" className="shadow" label="Enter User Name" theme="black" err={userErr} onChange={(event) => validateUserName(event)} value={userName} />
                  <div className="d-flex flex-row justify-content-center">
                    <button className="btn btn-dark shadow" onClick={submit} style={{ backgroundColor: "#00bfa5", border: "0px" }}>Submit</button>
                  </div>
                </>
              )}
              </div>
              </div>
              </div>
          </>
          ) : (
          <>
            <Dashboard />
          </>
      )}
        </>
      )
}
