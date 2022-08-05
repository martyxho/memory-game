import React from "react";

function Card (props) {
  
  function handleClick() {
    props.handleClick(props.name);
  }

  return (
    <div className="card" onClick={handleClick}>
      <div>
        <img src={props.src} alt={props.name} />
        <h2>{props.name}</h2>
      </div>
    </div>
  )
}

export default Card;