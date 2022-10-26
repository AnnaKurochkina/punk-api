import React from "react";
import "./CardList.scss";

const CardList = ({cards}) => {

    return (
        <div className="card-grid-container">
            {cards}
        </div>
    )
}


export default CardList
