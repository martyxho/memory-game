import React, { useState } from "react";
import uniqid from "uniqid";
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
import forgetMeNot from '../assets/forget-me-not.jpg'
import gladiolus from '../assets/gladiolus.webp'
import pansy from '../assets/pansy.jpeg'
import poppy from '../assets/poppy.jpg'
import hyacinth from '../assets/hyacinth.jpg'
import anemone from '../assets/anemone.jpg'
import camelia from '../assets/camelia.webp'
import daisy from '../assets/daisy.webp'

function Main(props) {

  const [cards, setCards] = useState(randomCards());

  function randomCards () {
    const assets = [{asset: nemophilia, name: 'nemophilia'}, {asset: carnation, name: 'carnation'}, {asset: chrysanthemum, name: 'chrysanthemum'}, {asset: lily, name: 'lily'}, {asset: orchid, name: 'orchid'}, {asset: rose, name: 'rose'}, {asset: sakura, name: 'sakura'}, {asset: sunflower, name: 'sunflower'}, {asset: tulip, name: 'tulip'}, {asset: violet, name: 'violet'}, {asset: forgetMeNot, name: 'forget-me-not'}, {asset: gladiolus, name: 'gladiolus'}, {asset: pansy, name: 'pansy'}, {asset: poppy, name: 'poppy'}, {asset: hyacinth, name: 'hyacinth'}, {asset: anemone, name: 'anemone'}, {asset: camelia, name: 'camelia'}, {asset: daisy, name: 'daisy'}];
    const elements = [];
    for (let i = 0; i < 12; i++) {
      const random = Math.floor(Math.random() * assets.length);
      const [flower] = assets.splice(random, 1);
      const element = <Card key={uniqid()} src={flower.asset} name={flower.name} handleClick={handleClick}/>
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
      <ul>
        {cards}
      </ul>
    </div>
  );
}

export default Main;
