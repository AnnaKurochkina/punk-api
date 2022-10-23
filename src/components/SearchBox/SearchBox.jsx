// import React, { useState } from "react";
import "./SearchBox.scss";


const SearchBox = (props) => {

    const { search, handleInput } = props;

    return (
        <form className="searchbox" action="">
        <label htmlFor="search">Name must include</label>
        <input
          id="search"
          className="searchbox__input"
          type="text"
          placeholder="Search..."
          onInput={handleInput}
          value={search}
        />
      </form>
    )

    //     <form className="searchbox">
    //         <label>Search:{" "}</label>
    //         <input className="searchbox__input" 
    //         type="text" 
    //         value={search} 
    //         placeholder="Search by name" 
    //         onChange={handleInput} 
    //         />
    //     </form>
    // )
}
export default SearchBox;





