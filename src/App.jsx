import React, { useState } from "react";

import beers from "./data/beers";

import './App.scss';
import CardList from "./components/CardList/CardList";
import Nav from "./containers/Nav/Nav";
import Card from "./components/Card/Card";

const App = () => {

  const [search, setSearch] = useState("");
  const [isHighAbv, setHighAbv] = useState(false);
  const [isClassic, setClassic] = useState(false);
  const [isAcidic, setAcidic] = useState(false);

  const yearBrewed = (beer) => {
    const parts = beer.first_brewed.split("/");
    const year = parts[1];
    return parseInt(year);
  }

  const filteredBeers = beers.filter(beer => {
    return beer.name.toLowerCase().includes(search.toLowerCase()) &&
      (!isHighAbv || beer.abv > 6) &&
      (!isClassic || yearBrewed(beer) < 2010) &&
      (!isAcidic || beer.ph < 4)
  });

  const beerCards = filteredBeers.map((beer) => {
    return <Card
        name={beer.name}
        tagline={beer.tagline}
        description={beer.description}
        image_url={beer.image_url}
        abv={beer.abv}
        first_brewed={beer.first_brewed}
        ph={beer.ph}
        key={beer.id}
      />
  });

  const filters = {
    highAbv: {current: isHighAbv, change: setHighAbv},
    classic: {current: isClassic, change: setClassic},
    acidic: {current: isAcidic, change: setAcidic}
  }

  return (
    <div className="App">
      <div className="main">
        <Nav 
          search={search} 
          setSearch={setSearch}
          filters={filters}
        />
        <CardList cards={beerCards}/>
      </div>
    </div>
  );
}

export default App;