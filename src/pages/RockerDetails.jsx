import React from "react";
import Rocker from "../components/Rocker";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import ModalDeleteRocker from "../components/ModalDeleteRocker";
import rockerFirebase from "../rockerFirebase";
import { Link } from "react-router-dom";
import "./styles/RockerDetails.css";
class RockerDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rockerId: "",
      loading: true,
      error: null,
      isOpen: false,
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
      const character = await rockerFirebase.rockers.read(this.state.rockerId);
      console.log(character);
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
    this.setState({
      isOpen: true,
    });
  };
  handleCloseModal = () => {
    this.setState({
      isOpen: false,
    });
  };
  handleDeleteRocker = async (e) => {
    await this.setState({
      loading: true,
      error: null,
    });
    try {
      this.handleCloseModal();
      await rockerFirebase.rockers.remove(this.state.rockerId);
      await this.props.history.push("/rockers");
    } catch (error) {
      this.setState({
        loading: false,
        error,
      });
      this.handleCloseModal();
    }
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
              <button
                className="link_button link_button-danger"
                onClick={this.handleDelete}
              >
                Delete
              </button>
              <Modal
                isOpen={this.state.isOpen}
                onCloseModal={() => this.handleCloseModal()}
              >
                <ModalDeleteRocker
                  onDeleteRocker={this.handleDeleteRocker}
                  onCancel={this.handleCloseModal}
                />
              </Modal>
            </div>
          </React.Fragment>
        )}
      </article>
    );
  }
}

export default RockerDetails;
