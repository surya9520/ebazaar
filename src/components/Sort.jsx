import React, { useState } from "react";

const Sort = ({ handleSort }) => {
  const [selectedSort, setSelectedSort] = useState("");
  const sortitems=["price high to low","price low to high"]

  const handleChange = (e) => {
    const selected = e.target.value;
    setSelectedSort(selected);
    handleSort(selected);
  };

  return (
    <div className="Sort-filter mb-6">
      <h3 className="text-lg font-semibold mb-4">Sort</h3>
      <select
        value={selectedSort}
        onChange={handleChange}
        className="w-44 p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        {sortitems.map((Sort, index) => (
          <option key={index} value={Sort}>
            {Sort}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sort;
