import React from "react";

function Card(props) {
  return (
    <div className={props.styles}>
      <div className="card text-center">
        <div className="card-header">
          <h2>{props.title}</h2>
        </div>
        <div className="card-body">{props.children}</div>
      </div>
    </div>
  );
}

export default Card;
