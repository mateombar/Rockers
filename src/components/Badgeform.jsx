import React from "react";
import "./styles/Badgeform.css";
class Badgeform extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    origin: "",
    description: "",
    status: "",
    quote: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
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
            <input
              className="form-group__input"
              onChange={this.handleChange}
              type="text"
              name="firstName"
              value={this.state.firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              className="form-group__input"
              onChange={this.handleChange}
              type="text"
              name="lastName"
              value={this.state.lastName}
            />
          </div>
          <div className="form-group">
            <label>Origin</label>
            <select
              className="form-group__input"
              onChange={this.handleChange}
              name="origin"
              value={this.state.origin}
            >
              <option value="Earth">Earth</option>
              <option value="Mars">Mars</option>
              <option value="Juno">Juno</option>
              <option value="Your mom">Your mom</option>
            </select>
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-group__input"
              onChange={this.handleChange}
              type="text"
              name="description"
              value={this.state.description}
            />
          </div>
          <div className="form-group">
            <label>Status</label>
            <select
              className="form-group__input"
              onChange={this.handleChange}
              name="status"
              value={this.state.status}
            >
              <option value="Alive">Alive</option>
              <option value="Death">Death</option>
              <option value="Unknown">Unknown</option>
            </select>
          </div>
          <div className="form-group">
            <label>Quote</label>
            <input
              className="form-group__input"
              onChange={this.handleChange}
              type="text"
              name="quote"
              value={this.state.quote}
            />
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
