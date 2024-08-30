function SearchBar({ onChange }) {
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        className="searchbar"
        id="search-input"
        onChange={onChange}></input>
    </>
  );
}

export default SearchBar;
