import React from "react";

class Badge extends React.Component {
  render() {
    return (
      <article>
        <header>
            <img src="" alt="header-banner"/>
        </header>
        <section className="profile">
          <img src="" alt="user-photo" />
          <h1>
            Math <br /> Montanez
          </h1>
        </section>
        <section className="description">
            <h4>Nationality: Terricola</h4>
            <p>Hombre comun estatura promedio</p>
            <small>Status: Alive</small>
        </section>
        <footer>
            <h5>Peace and love</h5>
        </footer>
      </article>
    );
  }
}

export default Badge;
