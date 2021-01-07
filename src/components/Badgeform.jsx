import React from "react";
import './styles/Badgeform.css';
class Badgeform extends React.Component {
  render() {
    return (
      <div className="badgeform">
        <h1>New Rocker</h1>
        <form>
            <div className="form-group">
                <label >First Name</label>
                <input type="text" name="firstName"/>
            </div>
            <button className="form-button">Save</button>
        </form>
      </div>
    );
  }
}

export default Badgeform;
