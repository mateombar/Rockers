import React from "react";
import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import "./styles/BadgeNew.css";
class BadgeNew extends React.Component {
  render() {
    const data = {
      firstName: "Matheuss",
      lastName: "Baronasisimuss",
      status: "Alive, for now ...",
      avatarUrl:
        "https://s.gravatar.com/avatar/c930c6ba7c0e62a1bf7f51cb4e255e5d?s=80",
      nationality: "Earthling",
      description:
        "Hombre comun, estatura promedio que come mucho y hace ejercicio",
    };
    return (
      <div className="badgenew">
        <Navbar />
        <article className="badgenew__article">
          <form>
            <p>hoooola</p>
          </form>
          <Badge data={data} />
        </article>
      </div>
    );
  }
}

export default BadgeNew;
