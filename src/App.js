import React from "react";
import Card from "./components/Card";
import './style/style.css';
import nemophilia from './assets/nemophilia.jpg'
import carnation from './assets/carnation.webp'
import chrysanthemum from './assets/chrysanthemum.jpg'
import lily from './assets/lily.jpeg'
import orchid from './assets/orchid.jpg'
import rose from './assets/rose.jpeg'
import sakura from './assets/sakura.jpg'
import sunflower from './assets/sunflower.jpeg'
import tulip from './assets/tulip.jpg'
import violet from './assets/violet.jpeg'


function App() {
  return (
    <div>
      <div id="header">
        <h1>Memory Game</h1>
        <h3>Get points by clicking on an image but don't click on any more than once!</h3>
      </div>
      <div id="main">
        <Card src={nemophilia} name='nemophilia'/>
        <Card src={carnation} name='carnation'/>
        <Card src={chrysanthemum} name='chrysanthemum'/>
        <Card src={lily} name='lily'/>
        <Card src={orchid} name='orchid'/>
        <Card src={rose} name='rose'/>
        <Card src={sakura} name='sakura'/>
        <Card src={sunflower} name='sunflower'/>
        <Card src={tulip} name='tulip'/>
        <Card src={violet} name='violet'/>
      </div>
    </div>
  );
}

export default App;
