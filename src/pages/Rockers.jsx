import React from "react";
import { Link } from "react-router-dom";
import api from "../api";

import Loader from "../components/Loader";
import RockersContainer from "../components/RockersContainer";
import "./styles/Rockers.css";
class Rockers extends React.Component {
  constructor(props) {
    super(props);
    this.pagination = this.pagination.bind(this);
    this.state = {
      actualPage: 1,
      pageSize: 5,
      loading: true,
      error: null,
      data: {},
    };
    this.controller = new AbortController();
  }
  componentDidMount() {
    this.fetchCharacters();
  }
  componentDidUpdate() {}
  async componentWillUnmount() {
    await this.controller.abort();
  }
  pagination = async (page) => {
    await this.setState({
      actualPage: this.state.actualPage + page,
      data: { options: this.state.data.options, results: [] },
    });
    if (this.state.actualPage > this.state.data.options.pages) {
      this.setState({
        actualPage: 1,
      });
    }
    if (this.state.actualPage <= 0) {
      this.setState({
        actualPage: this.state.data.options.pages,
      });
    }
    this.fetchCharacters();
  };

  fetchCharacters = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.rockers.list(
        this.state.pageSize,
        this.state.actualPage,
        this.controller.signal
      );
      this.setState({
        loading: false,
        data: data,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };
  handdlePageSize = async (e) => {
    await this.setState({
      pageSize: Number(e.target.value),
      actualPage: 1,
    });
    this.fetchCharacters();
  };
  render() {
    return (
      <div className="rocker__container">
        <div className="card">
          <section className="new__badge">
            <Link className="link_button" to="/rockers/new">
              New Rocker
            </Link>
          </section>

          {this.state.error && `${this.state.error.message}`}

          {this.state.loading && (
            <section className="loader__container">
              <Loader />
            </section>
          )}
          {this.state.data.length === 0 && this.state.loading === false && (
            <div>
              <h3>Rockers Not found</h3>
              <Link className="link_button" to="/rockers/new">
                Create a Rocker
              </Link>
            </div>
          )}
          {this.state.data && this.state.loading === false && (
            <RockersContainer
              pageSize={this.state.pageSize}
              handdlePageSize={this.handdlePageSize}
              pagination={this.pagination}
              data={this.state.data}
            />
          )}
        </div>
      </div>
    );
  }
}
export default Rockers;
