import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
// import { signupUserData } from "../../../redux/actions/userAction";
import { registeruser } from "../../../reduxstore/action";
// import { useDispatch } from "react-redux";
function SignUp() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // dispatch(signupUserData(firstName, lastName, email, password));
  //   setFirstName("");
  //   setLastName("");
  //   setEmail("");
  //   setPassword("");
  //   setTimeout(() => {
  //     navigate("/");
  //   }, 1000);
  // };
  let FirstNameRef = useRef();
  let LastNameRef = useRef();
  let Emailref = useRef();
  let Passsword = useRef();
  let currentuserdata = useSelector((myStore)=>{return myStore.registeredUsers});
  
 const handleRegister = (e)=>{
  
  e.preventDefault();
  let userDetails = {
    firstName : FirstNameRef.current.value,
    lastName : LastNameRef.current.value,
    email : Emailref.current.value,
    password : Passsword.current.value,
  }
  let userAlready_present = false;
  currentuserdata.forEach((elem)=>{
    if(elem.email === userDetails.email){
      userAlready_present = true;
    }
  })
  if(!userAlready_present){
    registeruser(userDetails,dispatch);
    alert("Registered successfully")
    setTimeout(()=>{
      navigate("/login")
    },2000)
  }else{
    alert("user already exist");
  }
  

  console.log(userDetails)
 }

  return (
    <div
      style={{ backgroundColor: "#fff", minHeight: "90vh", marginTop: "-24px" }}
    >
      <div className="comm-header">
        <img
          src="https://cdn.fcglcdn.com/brainbees/images/n/fc-logo-s.jpg"
          alt="Logo"
          className="img__logo"
          onClick={() => {
            navigate("/");
          }}
        />

        <section className="login__section">
          <div className="login__div">
            <p className=" login__heading">Register</p>
            <form >
              <input
                type="text"
                placeholder="First Name"
                ref={FirstNameRef}
                // onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                ref={LastNameRef}
                // value={lastName}
                // onChange={(e) => setLastName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                ref={Emailref}
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                ref={Passsword}
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
              <div>
                <button type="submit" onClick={handleRegister}>Register</button>
              </div>
              <div className="l__fot dis-flex">
                <div>If you already have an account, please</div>
                <div
                  className="navig__signup"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SignUp;
