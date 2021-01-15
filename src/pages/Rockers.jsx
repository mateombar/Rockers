import React from "react";
import { Link } from "react-router-dom";
import RockerBadge from "../components/RockerBadge";
import Loader from "../components/Loader";
import "./styles/Rockers.css";
class Rockers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actualPage: 1,
      loading: true,
      error: null,
      data: {
        results: [],
      },
    };
  }
  componentDidMount() {
    this.fetchCharacters();
  }
  componentDidUpdate() {}
  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }
  pagination = async (page) => {
    await this.setState({
      actualPage: this.state.actualPage + page,
      data: { info: this.state.data.info, results: [] },
    });
    if (this.state.actualPage > this.state.data.info.pages) {
      this.setState({
        actualPage: 1,
      });
    }
    if (this.state.actualPage <= 0) {
      this.setState({
        actualPage: this.state.data.info.pages,
      });
    }
    this.fetchCharacters();
  };

  fetchCharacters = async () => {
    this.setState({ loading: true, error: null });
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${this.state.actualPage}`
    );
    const data = await response.json();
    setTimeout(() => {
      try {
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
    }, 500);
  };
  render() {
    if (this.state.error) {
      return `Error: ${this.state.error.message}`;
    }
    return (
      <div className="rocker__container">
        <div className="card">
          <section className="filter">
            <input className="filter__input" type="text" placeholder="Search" />
            <div className="filter__select">
              <label>Filter</label>
              <select name="filter_select">
                <option value="status">Status</option>
              </select>
            </div>
          </section>
          <section className="new__badge">
            <Link to="/rockers/new">New Badge</Link>
          </section>
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
            {this.state.loading && (
              <section className="loader__container">
                <Loader />
              </section>
            )}
            <ul className="badges__container--list">
              {this.state.data.results.map((badge) => {
                return <RockerBadge data={badge} key={badge.id} />;
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
        </div>
      </div>
    );
  }
}
export default Rockers;
