import React from "react";

class RockerItem extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <article>
        <p>
          {data.firstName} {data.lastName}
        </p>
      </article>
    );
  }
}

export default RockerItem;
