import React from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="container-img">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </div>
  );
};

export default Logo;
