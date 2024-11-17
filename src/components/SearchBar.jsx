import React from 'react';

const SearchBar = ({ value, handleOnSearchChange }) => {
  return (
    <div className="searchContainer my-4">
      <input
        type="text"
        value={value}
        onChange={handleOnSearchChange}
        placeholder="Search for products..."
        className="w-full max-w-md p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
      />
    </div>
  );
};

export default SearchBar;
