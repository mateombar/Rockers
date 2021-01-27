import React, { useState } from "react";
import { Link } from "react-router-dom";
import RockerBadge from "./RockerBadge";
import './styles/RockersContainer.css';
function useSearchRockers(rockers) {
  const [query, setQuery] = useState("");
  const [filteredRockers, setFilteredRockers] = useState(rockers);
  React.useMemo(() => {
    const result = rockers.filter((rocker) => {
      return `${rocker.firstName} ${rocker.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setFilteredRockers(result);
  }, [rockers, query]);
  return { query, setQuery, filteredRockers };
}
function RockersContainer(props) {
  const { query, setQuery, filteredRockers } = useSearchRockers(
    props.data.results
  );
  return (
    <React.Fragment>
      <section className="filter">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="filter__input"
          type="text"
          placeholder="Search"
        />
        <div className="filter__select">
          <label>Pagination</label>
          <select
            name="filter_select"
            value={props.pageSize}
            onChange={props.handdlePageSize}
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
      {filteredRockers.length === 0 ? (
        <h4>No results</h4>
      ) : (
        <section className="badges__container">
          <div className="badges__container--pagination">
            <button onClick={() => props.pagination(-1)} className="prev">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button onClick={() => props.pagination(1)} className="next">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          <ul className="badges__container--list">
            {filteredRockers.map((rocker) => {
              return (
                <Link to={`/rockers/${rocker.idRocker}/details`} key={rocker.idRocker}>
                  <RockerBadge data={rocker} />
                </Link>
              );
            })}
          </ul>
          <div className="badges__container--pagination">
            <button onClick={() => props.pagination(-1)} className="prev">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button onClick={() => props.pagination(1)} className="next">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </section>
      )}
    </React.Fragment>
  );
}

export default RockersContainer;
