import React, { useState, useEffect } from "react";
import "./styles/RockerBadge.css";
function RockerBadge(props) {
  const data = props.data;
  const [email, setEmail] = useState(data.email);
  useEffect(() => {
    setEmail(`${email.substring(0, 12)}...`);
  }, [email]);
  return (
    <article className="rocker_badge">
      <div className="rocker_avatar">
        <img src={data.avatarUrl} alt={`${data.firstName} avatar`} />
      </div>
      <div className="rocker_info">
        <h3>
          {data.firstName} {data.lastName}
        </h3>
        <p>{email}</p>
        <p>{data.jobTitle}</p>
        <pre>{data.status}</pre>
      </div>
    </article>
  );
}

export default RockerBadge;
