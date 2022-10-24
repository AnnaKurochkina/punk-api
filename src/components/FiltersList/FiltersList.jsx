import "./FiltersList.scss";
import FilterItem from "../FilterItem/FilterItem";

const FiltersList = (props) => {

    const { filterBeers, abv } = props;

    return (
        <div>
        <div className = "filters"> 
        <FilterItem filterBy = {abv} filterLabel = "High ABV (> 6.0%)" filterBeers = {filterBeers}/> 
        <FilterItem filterBy = "yearBrewed" filterLabel = "Classic" filterBeers = {filterBeers}/> 
        <FilterItem filterBy = "ph" filterLabel = "Acidic (pH < 4)" filterBeers = {filterBeers}/> 
        </div>
        </div>
    )
}


export default FiltersList;

