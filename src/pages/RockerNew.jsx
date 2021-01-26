import React from "react";

import Rocker from "../components/Rocker";
import Rockerform from "../components/Rockerform";
import Loader from "../components/Loader";
import rockerFirebase from "../rockerFirebase";
import "./styles/RockerNew.css";
class RockerNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: null,
      form: {
        // id: "",
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
      loading: true,
      error: null,
    });
    try {
      await rockerFirebase.rockers.create(this.state.form)
      this.props.history.push("/rockers");
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
        {this.state.loading ? (
          <Loader />
        ) : (
          <article className="rockernew__article">
            <Rockerform
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
              handleImage={this.handleImage}
              formValues={this.state.form}
              headerTitle={"New"}
              error={this.state.error}
            />
            <Rocker data={this.state.form} />
          </article>
        )}
      </div>
    );
  }
}

export default RockerNew;
