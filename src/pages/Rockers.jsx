import React from "react";
import { Link } from "react-router-dom";
import RockerBadge from "../components/RockerBadge";
import "./styles/Rockers.css";
class Rockers extends React.Component {
  state = {
    data: [
      {
        id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
        firstName: "Freda",
        lastName: "Grady",
        avatarUrl:
          "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon",
        origin: "Earth",
        position: "Legacy Brand Director",
        status: "Death",
        quote: "Tengo hambre",
      },
      {
        id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
        firstName: "Major",
        lastName: "Rodriguez",
        avatarUrl:
          "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon",
        origin: "Mars",
        position: "Human Research Architect",
        status: "Alive",
        quote: "Tengo hambre",
      },
      {
        id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
        firstName: "Daphney",
        lastName: "Torphy",
        avatarUrl:
          "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon",
        origin: "Juno",
        position: "National Markets Officer",
        status: "Alive",
        quote: "Tengo hambre",
      },
      {
        id: "001",
        firstName: "Lupita",
        lastName: "Lopez",
        avatarUrl:
          "https://s.gravatar.com/avatar/c930c6ba7c0e62a1bf7f51cb4e255e5d?s=80",
        origin: "Earth",
        position: "Software Engineer",
        status: "Death",
        quote: "Tengo hambre",
      },
      {
        id: "002",
        firstName: "Lupita",
        lastName: "Lopez",
        avatarUrl:
          "https://s.gravatar.com/avatar/c930c6ba7c0e62a1bf7f51cb4e255e5d?s=80",
        origin: "Earth",
        position: "Software Engineer",
        status: "Death",
        quote: "Tengo hambre",
      },
      {
        id: "003",
        firstName: "Lupita",
        lastName: "Lopez",
        avatarUrl:
          "https://s.gravatar.com/avatar/c930c6ba7c0e62a1bf7f51cb4e255e5d?s=80",
        origin: "Earth",
        position: "Software Engineer",
        status: "Death",
        quote: "Tengo hambre",
      },
      {
        id: "004",
        firstName: "Lupita",
        lastName: "Lopez",
        avatarUrl:
          "https://s.gravatar.com/avatar/c930c6ba7c0e62a1bf7f51cb4e255e5d?s=80",
        origin: "Earth",
        position: "Software Engineer",
        status: "Death",
        quote: "Tengo hambre",
      },
      {
        id: "005",
        firstName: "Lupita",
        lastName: "Lopez",
        avatarUrl:
          "https://s.gravatar.com/avatar/c930c6ba7c0e62a1bf7f51cb4e255e5d?s=80",
        origin: "Earth",
        position: "Software Engineer",
        status: "Death",
        quote: "Tengo hambre",
      },
      {
        id: "006",
        firstName: "Lupita",
        lastName: "Lopez",
        avatarUrl:
          "https://s.gravatar.com/avatar/c930c6ba7c0e62a1bf7f51cb4e255e5d?s=80",
        origin: "Earth",
        position: "Software Engineer",
        status: "Death",
        quote: "Tengo hambre",
      },
    ],
  };
  render() {
    return (
      <section className="home__container">
        <div className="filter">
          <input className="filter__input" type="text" placeholder="Search" />
          <div className="filter__select">
            <label>Filter</label>
            <select name="filter_select">
              <option value="status">Status</option>
              <option value="origin">Origin</option>
            </select>
          </div>
        </div>
        <div className="new__badge">
          <Link to="/rockers/new">New Badge</Link>
        </div>
        <div className="badges__container">
          <ul className="badges__container--list">
            {this.state.data.map((badge) => {
              return <RockerBadge data={badge} key={badge.id} />;
            })}
          </ul>
        </div>
      </section>
    );
  }
}
export default Rockers;