import React from "react";
import "./styles/Badgeform.css";
class Badgeform extends React.Component {
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
              onChange={this.props.onChange}
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              className="form-group__input"
              onChange={this.props.onChange}
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>
          <div className="form-group">
            <label>Gravatar Url</label>
            <input
              className="form-group__input"
              onChange={this.props.onChange}
              type="text"
              name="avatarUrl"
              value={this.props.formValues.avatarUrl}
            />
          </div>
          <div className="form-group">
            <label>Origin</label>
            <select
              className="form-group__input"
              onChange={this.props.onChange}
              name="origin"
              value={this.props.formValues.origin}
            >
              <option value="Earth">Earth</option>
              <option value="Mars">Mars</option>
              <option value="Juno">Juno</option>
              <option value="Your mom">Your mom</option>
            </select>
          </div>
          <div className="form-group">
            <label>Position</label>
            <input
              className="form-group__input"
              onChange={this.props.onChange}
              type="text"
              name="position"
              value={this.props.formValues.position}
            />
          </div>
          <div className="form-group">
            <label>Status</label>
            <select
              className="form-group__input"
              onChange={this.props.onChange}
              name="status"
              value={this.props.formValues.status}
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
              onChange={this.props.onChange}
              type="text"
              name="quote"
              value={this.props.formValues.quote}
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
