import React from "react";
import Badge from "../components/Badge";
import Badgeform from "../components/Badgeform";
import "./styles/BadgeNew.css";
class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      avatarUrl: "",
      email: "",
      position: "",
      status: "",
      quote: "",
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
      <div className="badgenew">
        <article className="badgenew__article">
          <Badgeform
            onChange={this.handleChange}
            handleImage={this.handleImage}
            formValues={this.state.form}
          />
          <Badge data={this.state.form} />
        </article>
      </div>
    );
  }
}

export default BadgeNew;
