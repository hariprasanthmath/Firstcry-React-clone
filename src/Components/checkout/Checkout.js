import React from "react";
import "./checkout.css";
import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div>
      <div className="gif-container">
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20201129221326/abc.gif"
          alt=".."
        />
        <div className="home__option">
          <Link to="/">
            <div className="home__option__btn">Home</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
