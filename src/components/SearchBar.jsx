import React, { useState } from "react";

const SearchBar = ({ handleOnSearchChange }) => {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e) => {
    let text = e.target.value;
    setSearchValue(text);
    handleOnSearchChange(searchValue);
  };
  return (
    <div className="searchContainer my-4">
      <input
        type="text"
        value={searchValue}
        onChange={handleChange}
        placeholder="Search for products..."
        className="w-full max-w-md p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
      />
    </div>
  );
};

export default SearchBar;
