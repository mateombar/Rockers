import React from "react";
import Rocker from "../components/Rocker";
import Rockerform from "../components/Rockerform";
import api from "../api";
import "./styles/RockerNew.css";
class RockerNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      form: {
        firstName: "",
        lastName: "",
        avatarUrl: "",
        email: "",
        jobTitle: "",
        status: "",
      },
    };
  }
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  handleImage = (url) => {
    this.setState({
      form: {
        ...this.state.form,
        avatarUrl: url,
      },
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      loading: false,
      error: null,
    });
    try {
      this.setState({
        loading: false,
      });
      await api.rockers.create(this.state.form);
      this.props.history.push('/rockers');
    } catch (error) {
      this.setState({
        loading: false,
        error,
      });
    }
  };
  render() {
    return (
      <div className="rockernew">
        <article className="rockernew__article">
          <Rockerform
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            handleImage={this.handleImage}
            formValues={this.state.form}
            error={this.state.error}
          />
          <Rocker data={this.state.form} />
        </article>
      </div>
    );
  }
}

export default RockerNew;
