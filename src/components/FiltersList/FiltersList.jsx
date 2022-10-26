import "./FiltersList.scss";
import FilterItem from "../FilterItem/FilterItem";

const FiltersList = ({filters}) => {

    return (
        <div>
            <div className="filters">
                <div className="filters__item">
                    <FilterItem filterBy="abv" isChecked={filters.highAbv.current} setChecked={filters.highAbv.change}/>
                    <label htmlFor="abv"> High ABV</label>
                </div>
                <div className="filters__item">
                    <FilterItem filterBy="yearBrewed" isChecked={filters.classic.current} setChecked={filters.classic.change}/>
                    <label htmlFor="yearBrewed"> Classic</label>
                </div>
                <div className="filters__item">
                    <FilterItem filterBy="ph" isChecked={filters.acidic.current} setChecked={filters.acidic.change}/>
                    <label htmlFor="ph"> Acidic</label>
                </div>
            </div>
        </div>
    )
}


export default FiltersList;
