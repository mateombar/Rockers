import React from "react";
import './styles/Loader.css';
function Loader(params) {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
export default Loader;
