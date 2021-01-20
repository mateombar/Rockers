import React from "react";
import Rocker from "../components/Rocker";
import Loader from "../components/Loader";
import api from "../api";
import {Link} from 'react-router-dom';
import "./styles/RockerDetails.css";
class RockerDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rockerId: "",
      loading: true,
      error: null,
      character: {
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
    this.fetchCharacter();
  };
  fetchCharacter = async () => {
    this.setState({
      loading: true,
      error: null,
    });
    const character = await api.rockers.read(this.state.rockerId);
    try {
      this.setState({
        loading: false,
        character,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error,
      });
    }
  };
  handleDelete = e => {
      console.log('jaja');
  }
  render() {
    return (
      <article className="rockerdetails__container">
        {this.state.loading ? (
          <Loader />
        ) : (
          <React.Fragment>
            <Rocker data={this.state.character} />
            <div className="button__container">
                <Link className="link_button" to={`/rockers/${this.state.rockerId}/edit`}>Edit</Link>
                <button className="link_button" onClick={this.handleDelete}>Delete</button>
            </div>
          </React.Fragment>
        )}
      </article>
    );
  }
}

export default RockerDetails;
