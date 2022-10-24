import "./SearchBox.scss";


const SearchBox = (props) => {

    const { search, handleInput } = props;

    return (
        <form className="searchbox">
        <label htmlFor="search">Start typing beer name</label>
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





