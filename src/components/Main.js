import React, { useState } from "react";
import Card from './Card'
import nemophilia from '../assets/nemophilia.jpg'
import carnation from '../assets/carnation.webp'
import chrysanthemum from '../assets/chrysanthemum.jpg'
import lily from '../assets/lily.jpeg'
import orchid from '../assets/orchid.jpg'
import rose from '../assets/rose.jpeg'
import sakura from '../assets/sakura.jpg'
import sunflower from '../assets/sunflower.jpeg'
import tulip from '../assets/tulip.jpg'
import violet from '../assets/violet.jpeg'


function Main(props) {

  const [cards, setCards] = useState(randomCards());

  function randomCards () {
    const assets = [{asset: nemophilia, name: 'nemophilia'}, {asset: carnation, name: 'carnation'}, {asset: chrysanthemum, name: 'chrysanthemum'}, {asset: lily, name: 'lily'}, {asset: orchid, name: 'orchid'}, {asset: rose, name: 'rose'}, {asset: sakura, name: 'sakura'}, {asset: sunflower, name: 'sunflower'}, {asset: tulip, name: 'tulip'}, {asset: violet, name: 'violet'}];
    const elements = [];
    for (let i = 0; i < 10; i++) {
      const random = Math.floor(Math.random() * assets.length);
      const [flower] = assets.splice(random, 1);
      const element = <Card src={flower.asset} name={flower.name} handleClick={handleClick}/>
      elements.push(element);
    }
    return elements;
  }

  function handleClick(name) {
    setCards(randomCards());
    props.handleClick(name);
  }

  return (
    <div id="main">
        {cards}
    </div>
  );
}

export default Main;
