import "./FilterItem.scss";

const FilterItem = (props) => {

    const { filterBy, filterLabel, filterBeers } = props;


    return (
        <>
        <label htmlFor = {filterBy} > {filterLabel} </label>
        <input 
        type="checkbox" 
        id={filterBy}
        name={filterBy} 
        className="filter-item"
        onClick={filterBeers} />
        </>
    )
}


export default FilterItem;

