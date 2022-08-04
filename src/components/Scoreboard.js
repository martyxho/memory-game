import React from "react";

function Scoreboard(props) {
  return (
    <div id="scoreboard">
      <p>Score: {props.score}</p>
      <p>Best Score: {props.best}</p>
    </div>
  )
}

export default Scoreboard;