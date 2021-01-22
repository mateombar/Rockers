import React from "react";
import "./styles/Rockerform.css";
function Rockerform(props) {
  const fileInput = React.createRef();
  function useHandleImage() {
    const reader = new FileReader();
    const file = fileInput.current.files[0];
    if (file) {
      reader.readAsDataURL(file);
    }
    reader.onloadend = () => {
      props.handleImage(reader.result);
    };
  }
  return (
    <div className="rockerform">
      <header>
        <h1>{props.headerTitle} Rocker</h1>
      </header>
      <form onSubmit={props.onSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            className="form-group__input"
            onChange={props.onChange}
            type="text"
            name="firstName"
            value={props.formValues.firstName}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            className="form-group__input"
            onChange={props.onChange}
            type="text"
            name="lastName"
            value={props.formValues.lastName}
            required
          />
        </div>
        <div className="form-group">
          <label>Rocker Image</label>
          <input
            className="form-group__input"
            onChange={useHandleImage}
            type="file"
            id="avatarUrl"
            accept="image/png, image/jpeg"
            name="avatarUrl"
            ref={fileInput}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            className="form-group__input"
            onChange={props.onChange}
            type="text"
            name="email"
            value={props.formValues.email}
            required
          />
        </div>
        <div className="form-group">
          <label>Job Title</label>
          <input
            className="form-group__input"
            onChange={props.onChange}
            type="text"
            name="jobTitle"
            value={props.formValues.jobTitle}
            required
          />
        </div>
        <div className="form-group">
          <label>Status</label>
          <select
            className="form-group__input"
            onChange={props.onChange}
            name="status"
            value={props.formValues.status}
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

        <button onClick={props.handleClick} className="form-button">
          Save
        </button>
        {props.error && <p>{props.error.message}</p>}
      </form>
    </div>
  );
}

export default Rockerform;
