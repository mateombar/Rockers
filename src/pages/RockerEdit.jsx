import React from "react";
import Rocker from "../components/Rocker";
import Rockerform from "../components/Rockerform";
import Loader from "../components/Loader";
import api from "../api";
import "./styles/RockerEdit.css";
class RockerEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      rockerId: "",
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
  componentDidMount = async () => {
    await this.setState({
      rockerId: this.props.match.params.rockerId,
    });
    this.fetchData();
  };
  fetchData = async (e) => {
    this.setState({
      loading: true,
      error: null,
    });
    try {
      const data = await api.rockers.read(this.state.rockerId);
      console.log(data);
      this.setState({
        loading: false,
        form: data,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error,
      });
    }
  };
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
      await api.rockers.update(this.state.rockerId, this.state.form);
      this.props.history.push("/rockers");
    } catch (error) {
      this.setState({
        loading: false,
        error,
      });
    }
  };
  render() {
    if (this.state.loading) {
      return <Loader />;
    }
    return (
      <div className="rockeredit">
        <article className="rockeredit__article">
          <Rockerform
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            handleImage={this.handleImage}
            formValues={this.state.form}
            headerTitle={"Edit"}
            error={this.state.error}
          />
          <Rocker data={this.state.form} />
        </article>
      </div>
    );
  }
}

export default RockerEdit;
