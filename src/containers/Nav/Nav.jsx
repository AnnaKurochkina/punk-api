import "./Nav.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import FiltersList from "../../components/FiltersList/FiltersList";

const Nav = ({search, setSearch, filters}) => {

    return (
        <div className="sidenav">
            <SearchBox search={search}
            setSearch={setSearch}
            />
            <FiltersList filters={filters}/>
        </div>
    )
}


export default Nav;

