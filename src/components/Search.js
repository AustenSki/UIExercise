//Dependencies
import React, { useState } from "react";
//This function  is suppose to search the data table and present the user with the desired data
function Search() {
  const [search, setSearch] = useState("");

  return (
    //The input set up for the search bar
    <input
      type="text"
      id="search-control"
      placeholder="Search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default Search;
