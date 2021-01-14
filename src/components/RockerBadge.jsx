import React from "react";
import './styles/RockerBadge.css';
class RockerBadge extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <article className="rocker_badge">
        <div className="rocker_avatar">
          <img src={data.avatarUrl} alt={`${data.firstName} avatar`} />
        </div>
        <div className="rocker_info">
          <h3>{data.firstName} {data.lastName}</h3>
          <strong>{data.origin} - {data.status}</strong>
          <pre>{data.position}</pre>
          <i>{data.quote}</i>
        </div>
      </article>
    );
  }
}

export default RockerBadge;
