import React from "react";
import "./styles/Badgeform.css";
class Badgeform extends React.Component {
  handleChange = (e) => {
    console.log({
      name: e.target.name,
      value: e.target.value,
    });
  };
  handleClick = (e) => {
    console.log("clicked");
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="badgeform">
        <h1>New Rocker</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input className="form-group__input" onChange={this.handleChange} type="text" name="firstName" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input className="form-group__input" onChange={this.handleChange} type="text" name="lastName" />
          </div>
          <div className="form-group">
            <label>Origin</label>
            <select className="form-group__input" name="origin">
              <option value="Earth">Earth</option>
              <option value="Mars">Mars</option>
              <option value="Juno">Juno</option>
              <option value="Your mom">Your mom</option>
            </select>
          </div>
          <div className="form-group">
            <label>Description</label>
            <input className="form-group__input" onChange={this.handleChange} type="text" name="description" />
          </div>
          <div className="form-group">
            <label>Status</label>
            <select className="form-group__input" name="status">
              <option value="Earth">Alive</option>
              <option value="Mars">Death</option>
              <option value="Juno">Unknown</option>
            </select>
          </div>
          <div className="form-group">
            <label>Quote</label>
            <input className="form-group__input" onChange={this.handleChange} type="text" name="quote" />
          </div>
          <button onClick={this.handleClick} className="form-button">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default Badgeform;
