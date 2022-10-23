import "./Nav.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import FiltersList from "../../components/FiltersList/FiltersList";

const Nav = (props) => {
    
    const { search, handleInput, filterBeers } = props

    return (
<div className="sidenav">
            <SearchBox search={search} handleInput={handleInput} />
            <FiltersList filterBeers = {filterBeers} />
        </div>
    )
}


export default Nav;

