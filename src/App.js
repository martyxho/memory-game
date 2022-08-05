import React, { useState, useEffect } from "react";
import './style/style.css';
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  const [clicked, setClicked] = useState([]);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);

  useEffect(() => {
    if (score > best) {
      setBest(score);
    }
  }, [score, best]);

  useEffect(() => {
    if (clicked.length === 0) {
      return;
    }
    if (hasDuplicates(clicked)) {
      setScore(0);
      setClicked([]);
    } else {
      setScore(score => score + 1);
    }
  }, [clicked]);

  function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
  }

  function addClicked(name) {
    setClicked(arr => arr.concat(name));
  }
  
  return (
    <div>
      <Header score={score} best={best} />
      <Main handleClick={addClicked} />
    </div>
  );
}

export default App;
