import React from "react";
import Rocker from "../components/Rocker";
import Rockerform from "../components/Rockerform";
import "./styles/RockerNew.css";
class RockerNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      avatarUrl: "",
      email: "",
      jobTitle: "",
      status: "",
    },
  };
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  handleImage = (url) =>{
    this.setState({
      form: {
        ...this.state.form,
        avatarUrl: url,
      },
    });
  }
  render() {
    return (
      <div className="rockernew">
        <article className="rockernew__article">
          <Rockerform
            onChange={this.handleChange}
            handleImage={this.handleImage}
            formValues={this.state.form}
          />
          <Rocker data={this.state.form} />
        </article>
      </div>
    );
  }
}

export default RockerNew;
