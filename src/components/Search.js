import React, { useState } from "react";

function Search({listItems, setSearchedList}) {
  const [searchVal, setSearchVal] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const searchedItems = listItems.filter(item => {
      return item.description.toLowerCase().includes(searchVal.toLowerCase());
    })
    setSearchedList(searchedItems);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
