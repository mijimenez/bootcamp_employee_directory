import React from "react";

function Filter(props) {
  return (
    <div>
        <button className="btn btn-primary" onClick={props.handleSortUp}>
        Sort Up
        </button>{" "}
        <button className="btn btn-danger" onClick={props.handleSortDown}>
        Sort Down
        </button>
    </div>
  );
}

export default Filter;
