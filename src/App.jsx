import React, { useState } from "react";

import beers from "./data/beers";

import './App.scss';
import CardList from "./components/CardList/CardList";
import Nav from "./containers/Nav/Nav";


const App = () => {

  const [search, setNewSearch] = useState("");
  const [isHighABV, setIsHighABV] = useState(false);

  const handleInput = (event) => {
    setNewSearch(event.target.value);
  };
    
  const handleAbv = () => {
    setIsHighABV(!isHighABV);
  }

  const filterBeers = beers.filter(beer => {
    return beer.name.toLowerCase().includes(search.toLowerCase())
    && (!isHighABV || beer.abv > 6)
  });

  return (
    <div className="App">
      <div className="main">
      <Nav search={search} handleInput={handleInput} abv={isHighABV} handleAbv={handleAbv}/>
      <CardList beerList={filterBeers}/>
      </div>
    </div>
  );
}

export default App;