import React from "react";
import Badge from "../components/Badge";
import Badgeform from "../components/Badgeform";
import "./styles/BadgeNew.css";
class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      avatarUrl: "https://s.gravatar.com/avatar/c930c6ba7c0e62a1bf7f51cb4e255e5d?s=80",
      origin: "",
      description: "",
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
  render() {
    return (
      <div className="badgenew">
        <article className="badgenew__article">
          <Badgeform onChange={this.handleChange} formValues={this.state.form}/>
          <Badge data={this.state.form} />
        </article>
      </div>
    );
  }
}

export default BadgeNew;
