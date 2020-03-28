import React from "react";

function Filter(props) {
  return (
    <div className="mb-5 sort-widget">
        <p>Sort by last name in ascending or descending alphabetical order.</p>
        <button className="btn btn-primary" onClick={props.handleSortUp}>
        Sort Up<i class="fas fa-chevron-up ml-2"/>
        </button>{" "}
        <button className="btn btn-secondary" onClick={props.handleSortDown}>
        Sort Down<i class="fas fa-chevron-down ml-2"/>
        </button>
    </div>
  );
}

export default Filter;
