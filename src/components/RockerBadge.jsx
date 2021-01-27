import React from "react";
import "./styles/RockerBadge.css";
function RockerBadge(props) {
  const data = props.data;
  return (
    <article className="rocker_badge">
      <div className="rocker_avatar">
        <img src={data.avatarUrl} alt={`${data.firstName} avatar`} />
      </div>
      <div className="rocker_info">
        <h3>
          {data.firstName} {data.lastName}
        </h3>
        <p>{data.email}</p>
        <p>{data.jobTitle}</p>
        <pre>{data.status}</pre>
      </div>
    </article>
  );
}

export default RockerBadge;
