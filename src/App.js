import React from "react";
import Card from "./components/Card";
import './style/style.css';
import nemophilia from './assets/nemophilia.jpg'

function App() {
  return (
    <div>
      <div id="header">
        <h1>Memory Game</h1>
        <h3>Get points by clicking on an image but don't click on any more than once!</h3>
      </div>
      <div id="main">
        <Card src={nemophilia} name='nemophilia'/>
        <Card src={nemophilia} name='nemophilia'/>
        <Card src={nemophilia} name='nemophilia'/>
        <Card src={nemophilia} name='nemophilia'/>
        <Card src={nemophilia} name='nemophilia'/>
        <Card src={nemophilia} name='nemophilia'/>
        <Card src={nemophilia} name='nemophilia'/>
        <Card src={nemophilia} name='nemophilia'/>
        <Card src={nemophilia} name='nemophilia'/>
        <Card src={nemophilia} name='nemophilia'/>
        <Card src={nemophilia} name='nemophilia'/>
        <Card src={nemophilia} name='nemophilia'/>
      </div>
    </div>
  );
}

export default App;
