import React from "react";
import error from "../assets/banners/error.svg";
import "./styles/NotFound.css";
function NotFound() {
  return (
    <div className="notfound_container">
      <img src={error} alt="" />
    </div>
  );
}

export default NotFound;
