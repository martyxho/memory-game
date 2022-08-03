import React from "react";

function Card (props) {
  return (
    <div className="card">
      <div>
        <img src={props.src} alt={props.name} />
        <h2>{props.name}</h2>
      </div>
    </div>
  )
}

export default Card;