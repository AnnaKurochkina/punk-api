import "./FilterItem.scss";

const FilterItem = (props) => {

    const { filterBy, filterLabel, filterBeers } = props;


    return (
        <div className="checkbox">
        <label htmlFor = {filterBy} > {filterLabel} </label>
        <input 
        type="checkbox" 
        id={filterBy}
        name={filterBy} 
        className="filter-item"
        onChange={filterBeers} />
        </div>
    )
}


export default FilterItem;

