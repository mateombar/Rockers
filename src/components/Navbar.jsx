import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
function Navbar() {
  return (
    <header className="navbar">
      <Link className="icon" to="/">
        <span className="icon_logo">
          <i className="fas fa-chess-rook"></i>
        </span>
        <span className="icon_title">Tower</span>
      </Link>
      <ul className="views">
        <li className="view_item">
          <Link to="/rockers">Rockers</Link>
        </li>
        <li className="view_item">
          <Link to="/about">About</Link>
        </li>
      </ul>
      {/* <a className="hamburger">
                    <i className="fas fa-bars"></i>
                </a> */}
    </header>
  );
}

export default Navbar;
