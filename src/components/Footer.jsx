import React from "react";
import './styles/Footer.css';
function Footer() {
  return (
    <footer className="rocker_footer">
      <section className="footer__container">
        <div className="contact__info">
          <a href="">
            <i className="fab fa-github"></i>
          </a>
          <a href="">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="copy_rigth">
          <p>mateomontabaron@gmail.com</p>
          <p>Terms of use Privacy Policy</p>
          <pre>
            <i className="far fa-copyright"></i> 2020
          </pre>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
