import React from "react";
import greenBanner from "../assets/banners/green-banner.svg";

import "./styles/Rocker.css";
class Rocker extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <article className="rocker">
        <header className="rocker_header">
          <img src={greenBanner} alt="header-banner" />
          <div className="header_info">
            <h1>
              {data.firstName.toUpperCase()} {data.lastName.toUpperCase()}
            </h1>
          </div>
        </header>
        <section className="profile">
          <div className="profile_photo">
            <img src={data.avatarUrl} alt="user-profile" />
          </div>
          <div className="profile_description">
            <p>{data.email}</p>
            <p>{data.jobTitle}</p>
            <small>Status: {data.status}</small>
          </div>
        </section>
        <footer>
          {/* <h5>"{data.quote}"</h5> */}
        </footer>
      </article>
    );
  }
}

export default Rocker;
