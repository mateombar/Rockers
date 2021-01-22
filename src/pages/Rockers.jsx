import React from "react";
import { Link } from "react-router-dom";
import RockerBadge from "../components/RockerBadge";
import Loader from "../components/Loader";
import api from "../api";
import "./styles/Rockers.css";
class Rockers extends React.Component {
  constructor(props) {
    super(props);
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
          <section className="filter">
            <input className="filter__input" type="text" placeholder="Search" />
            <div className="filter__select">
              <label>Pagination</label>
              <select
                name="filter_select"
                value={this.state.pageSize}
                onChange={this.handdlePageSize}
              >
                <option value="5" type="number">
                  5
                </option>
                <option value="10" type="number">
                  10
                </option>
              </select>
            </div>
          </section>
          {this.state.data && this.state.loading === false && (
            <section className="badges__container">
              {!this.state.loading && (
                <div className="badges__container--pagination">
                  <button onClick={() => this.pagination(-1)} className="prev">
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button onClick={() => this.pagination(1)} className="next">
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              )}

              <ul className="badges__container--list">
                {this.state.data.results.map((rocker) => {
                  return (
                    <Link to={`/rockers/${rocker.id}/details`} key={rocker.id}>
                      <RockerBadge data={rocker} />
                    </Link>
                  );
                })}
              </ul>
              {!this.state.loading && (
                <div className="badges__container--pagination">
                  <button onClick={() => this.pagination(-1)} className="prev">
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button onClick={() => this.pagination(1)} className="next">
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              )}
            </section>
          )}
        </div>
      </div>
    );
  }
}
export default Rockers;
