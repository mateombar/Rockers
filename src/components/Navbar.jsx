import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import hand from "../assets/icons/hand.svg";
function Navbar() {
  return (
    <React.Fragment>
      <header className="navbar">
        <Link className="icon" to="/">
          <img className="icon_logo" src={hand} alt="" />
          <span className="icon_title">Rock</span>
        </Link>
        <ul className="views">
          <li className="view_item">
            <Link to="/rockers">Rockers</Link>
          </li>
          <li className="view_item">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </header>
      <section className="banner">
        <div className="banner__info">
          <img src={hand} alt="" />
          <h2>Rock N' Roll</h2>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Navbar;
