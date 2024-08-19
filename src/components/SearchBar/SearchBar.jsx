import "./SearchBar.scss";

function SearchBar() {
  return (
    <div className="search-container">
      <img
        src="src/assets/icons/search.svg"
        alt="Search"
        className="search-icon"
      />
      <input id="search" type="text" placeholder="Search" className="search-input" />
    </div>
  );
}

export default SearchBar;
