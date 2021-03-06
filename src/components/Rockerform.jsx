import React from "react";
import "./styles/Rockerform.css";
class Rockerform extends React.Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.useHandleImage = this.useHandleImage.bind(this);
  }
  useHandleImage = () => {
    const reader = new FileReader();
    const file = this.fileInput.current.files[0];
    if (file) {
      reader.readAsDataURL(file);
    }
    reader.onloadend = () => {
      this.props.handleImage(reader.result);
    };
  };
  render() {
    return (
      <div className="rockerform">
        <header>
          <h1>{this.props.headerTitle} Rocker</h1>
        </header>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              className="form-group__input"
              onChange={this.props.onChange}
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
              required
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
              required
            />
          </div>
          <div className="form-group">
            <label>Rocker Image</label>
            <input
              className="form-group__input"
              onChange={this.useHandleImage}
              type="file"
              id="avatarUrl"
              accept="image/png, image/jpeg"
              name="avatarUrl"
              ref={this.fileInput}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-group__input"
              onChange={this.props.onChange}
              type="text"
              name="email"
              value={this.props.formValues.email}
              required
            />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input
              className="form-group__input"
              onChange={this.props.onChange}
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
              required
            />
          </div>
          <div className="form-group">
            <label>Status</label>
            <select
              className="form-group__input"
              onChange={this.props.onChange}
              name="status"
              value={this.props.formValues.status}
              required
            >
              <option value="" disabled>
                Choose one
              </option>
              <option value="Available">Available</option>
              <option value="Working">Working</option>
              <option value="Unemployed">Unemployed</option>
              <option value="No Available">No Available</option>
            </select>
          </div>

          <button onClick={this.props.handleClick} className="form-button">
            Save
          </button>
          {this.props.error && <p>{this.props.error.message}</p>}
        </form>
      </div>
    );
  }
}

export default Rockerform;
