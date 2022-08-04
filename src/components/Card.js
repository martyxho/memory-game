import React from "react";
import uniqid from "uniqid";

function Card (props) {
  
  function handleClick() {
    props.handleClick(props.name);
  }

  return (
    <div key={uniqid()} className="card" onClick={handleClick}>
      <div>
        <img src={props.src} alt={props.name} />
        <h2>{props.name}</h2>
      </div>
    </div>
  )
}

export default Card;