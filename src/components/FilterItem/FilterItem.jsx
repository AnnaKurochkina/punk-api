import "./FilterItem.scss";

const FilterItem = ({filterBy, filterLabel, isChecked, setChecked}) => {

    const toggleState = () => {
        setChecked(!isChecked);
    };

    return (
        <div className="checkbox">
        <label htmlFor={filterBy}>{filterLabel}</label>
        <input 
            type="checkbox" 
            id={filterBy}
            name={filterBy}
            className="filter-item"
            onChange={toggleState}
            checked={isChecked}/>
        </div>
    )
}


export default FilterItem;

