import React from "react";
import { Link } from "react-router-dom";

import "./styles/Home.css";
function Home() {
  return (
    <div className="home_container">
      <div className="home_card">
        <header>
          <h1>Welcome Rocker</h1>
        </header>
        <section>
          <h4>¿What can you do?</h4>
          <p>
            Well, you can go to <Link to="/rockers">Rockers</Link> and create
            your own Rocker
          </p>
          <p>
            Or, you can go to <Link to="/about">About</Link>, to know about me
          </p>
          <p>
            ¿Do you wanna see the cat? <Link to="/error">Click Me</Link>
          </p>
        </section>
      </div>
    </div>
  );
}

export default Home;
