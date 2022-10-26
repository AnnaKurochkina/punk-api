import "./SearchBox.scss";

const SearchBox = ({search, setSearch}) => {

    const handleInput = (event) => {
        setSearch(event.target.value);
    };

    return (
        <form className="searchbox">
            <label htmlFor="search">Beer search</label>
            <input
                id="search"
                className="searchbox__input"
                type="text"
                placeholder="Search..."
                onChange={handleInput}
                value={search}
            />
        </form>
    )
}


export default SearchBox;
