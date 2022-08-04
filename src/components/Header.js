import React from "react";
import Scoreboard from "./Scoreboard";

function Header(props) {
  return (
    <div id="header">
      <div>
        <h1>Memory Game</h1>
        <h3>Get points by clicking on an image but don't click on any more than once!</h3>
      </div>
      <Scoreboard score={props.score} best = {props.best} />
    </div>
  )
}

export default Header;