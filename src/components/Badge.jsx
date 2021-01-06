import React from "react";
import greenBanner from "../assets/banners/green-banner.svg";
import pic from "../assets/images/me.jpg";

import "./styles/Badge.css";
class Badge extends React.Component {
  render() {
    return (
      <article className="badge">
        <header className="badge_header">
          <img src={greenBanner} alt="header-banner" />
          <div className="header_info">
            <h1>MATEHUS BARONASISIMOAS</h1>
            <h5>TERRICOLA</h5>
          </div>
        </header>
        <section className="profile">
          <div className="profile_photo">
            <img src={pic} alt="user-profile" />
          </div>
          <div className="profile_description">
            <h4>Nationality: Terricola</h4>
            <p>Hombre comun, estatura promedio que come mucho y hace ejercicio</p>
            <small>Status: Alive</small>
          </div>
        </section>
        <footer>
          <h5>"Peace and love"</h5>
        </footer>
      </article>
    );
  }
}

export default Badge;
