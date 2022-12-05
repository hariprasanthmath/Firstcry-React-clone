import React, { useState ,useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { registeruser } from "../../../reduxstore/action";
import { userLoginSet } from "../../../reduxstore/action";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.registeredUsers);


  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin =(e)=>{
    e.preventDefault();
    const email = emailRef.current.value
    const password = passwordRef.current.value
    
    let BothCredentialCorrect = false;
    let wrongcredential = false;
    let userNotFound = true;
    if(userData.length < 1){
      alert("Register");
      
      navigate("/signup")
    }
    let toSendData = {
      
    }
    userData.map((eachUser)=>{
      
      

      if(eachUser.email === email && eachUser.password === password){
           BothCredentialCorrect = true;
           userNotFound = false;
           toSendData.firstName = eachUser.firstName;
           toSendData.lastName = eachUser.lastName;
           toSendData.email = eachUser.email;
           
      }else if(eachUser.email === email && eachUser.password !== password){
          wrongcredential = true;
      }
      
    })
     if(BothCredentialCorrect){
      alert("loggedin")
      userLoginSet(toSendData,dispatch)
      navigate("/");
    }else if(wrongcredential){
      alert("wrong credential")
    }else if(userNotFound){
      alert("User not found")
    }


  }

  // console.log("data ", data);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // dispatch(loginUserData(email, password));
  //   setEmail("");
  //   setPassword("");
  //   setTimeout(() => {
  //     navigate("/");
  //   }, 1000);
  // };

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
            <p className=" login__heading">Login</p>
            <form >
              <input
                type="email"
                placeholder="Email"
                ref={emailRef}
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                ref={passwordRef}
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
              <div>
                <button onClick={handleLogin} type="submit">Login</button>
              </div>
              <div className="l__fot dis-flex">
                <div>If you don't have an account, please</div>
                <div
                  className="navig__signup"
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  Register Here
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;
