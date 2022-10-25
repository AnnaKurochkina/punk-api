import "./FiltersList.scss";
import FilterItem from "../FilterItem/FilterItem";

const FiltersList = ({filters}) => {

    return (
        <div>
            <div className = "filters"> 
                <FilterItem filterBy="abv" filterLabel="High ABV (> 6.0%)" isChecked={filters.highAbv.current} setChecked={filters.highAbv.change}/> 
                <FilterItem filterBy="yearBrewed" filterLabel="Classic" isChecked={filters.classic.current} setChecked={filters.classic.change}/> 
                <FilterItem filterBy="ph" filterLabel="Acidic (pH < 4)" isChecked={filters.acidic.current} setChecked={filters.acidic.change}/> 
            </div>
        </div>
    )
}


export default FiltersList;

