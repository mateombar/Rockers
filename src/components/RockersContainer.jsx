import React from "react";
import RockerBadge from "./RockerBadge";
import { Link } from "react-router-dom";
function RockersContainer(props) {
  return (
    <React.Fragment>
      <section className="filter">
        <input className="filter__input" type="text" placeholder="Search" />
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
          {props.data.results.map((rocker) => {
            return (
              <Link to={`/rockers/${rocker.id}/details`} key={rocker.id}>
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
    </React.Fragment>
  );
}

export default RockersContainer;
