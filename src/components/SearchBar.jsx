const SearchBar = ({ setSearchQuery }) => {
    return (
      <input
        type="text"
        placeholder="Search Products"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    );
  };
  
  export default SearchBar;
  