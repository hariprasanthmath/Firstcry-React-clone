import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signupUserData } from "../../../redux/actions/userAction";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUserData(firstName, lastName, email, password));
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

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
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div>
                <button type="submit">Register</button>
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
