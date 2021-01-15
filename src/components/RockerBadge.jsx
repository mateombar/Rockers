import React from "react";
import './styles/RockerBadge.css';
class RockerBadge extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <article className="rocker_badge">
        <div className="rocker_avatar">
          <img src={data.image} alt={`${data.name} avatar`} />
        </div>
        <div className="rocker_info">
          <h3>{data.name}</h3>
          <p><strong>{data.gender}</strong></p>
          <p><strong>{data.status}</strong></p>
          <pre>{data.species}</pre>
          <i>{data.origin.name}</i>
        </div>
      </article>
    );
  }
}

export default RockerBadge;
