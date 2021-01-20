import React from "react";
import ReactDom from 'react-dom'
import Rocker from "../components/Rocker";
import Loader from "../components/Loader";
import api from "../api";
import { Link } from "react-router-dom";
import "./styles/RockerDetails.css";
class RockerDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rockerId: "",
      loading: true,
      error: null,
      character: undefined,
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
    try {
      const character = await api.rockers.read(this.state.rockerId);
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
  handleDelete = (e) => {
    console.log("jaja");
  };
  render() {
    if (this.state.error) {
      return <h1>{this.state.error.message}</h1>;
    }
    return (
      <article className="rockerdetails__container">
        {this.state.loading ? (
          <Loader />
        ) : (
          <React.Fragment>
            <Rocker data={this.state.character} />
            <div className="button__container">
              <Link
                className="link_button"
                to={`/rockers/${this.state.rockerId}/edit`}
              >
                Edit
              </Link>
              <button className="link_button" onClick={this.handleDelete}>
                Delete
              </button>
              {ReactDom.createPortal(<h1>Hoooola, toy fuera</h1>, document.getElementById('delete_modal'))}
            </div>
          </React.Fragment>
        )}
      </article>
    );
  }
}

export default RockerDetails;
