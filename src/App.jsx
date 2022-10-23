import React, { useState } from "react";

import beers from "./data/beers";

import './App.scss';
import CardList from "./components/CardList/CardList";
import Nav from "./containers/Nav/Nav";


const App = () => {

  const [search, setNewSearch] = useState("");

  const handleInput = (event) => {
      setNewSearch(event.target.value);
    };

  return (
    <div className="App">
      <div className="main">
      <Nav  search={search} onChange={handleInput} />
      <CardList beerList={beers}/>
      </div>
    </div>
  );
}

export default App;
