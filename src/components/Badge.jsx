import React from "react";
import greenBanner from "../assets/banners/green-banner.svg";

import "./styles/Badge.css";
class Badge extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <div className="badge_container">
        <article className="badge">
          <header className="badge_header">
            <img src={greenBanner} alt="header-banner" />
            <div className="header_info">
              <h1>
                {data.firstName.toUpperCase()} {data.lastName.toUpperCase()}
              </h1>
              <h5>{data.origin}</h5>
            </div>
          </header>
          <section className="profile">
            <div className="profile_photo">
              <img src={data.avatarUrl} alt="user-profile" />
            </div>
            <div className="profile_description">
              <h4>{data.email}</h4>
              <p>{data.position}</p>
              <small>Status: {data.status}</small>
            </div>
          </section>
          <footer>
            <h5>"{data.quote}"</h5>
          </footer>
        </article>
      </div>
    );
  }
}

export default Badge;
