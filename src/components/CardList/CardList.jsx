import React from "react";
import Card from "../Card/Card";
import "./CardList.scss";

const CardList = (props) => {

    const { beerList } = props;

    const beerDisplay = beerList.map((beer) => {
    return <Card
        name = {beer.name}
        tagline = {beer.tagline}
        description = {beer.description}
        image_url = {beer.image_url}
        abv = {beer.abv}
        first_brewed = {beer.first_brewed}
        ph ={beer.ph}
        key={beer.id}
        />
    });

    return (
        <div className="card-grid-container">
            {beerDisplay}
        </div>
    )
}


export default CardList
