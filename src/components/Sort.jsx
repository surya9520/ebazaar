import React, { useState } from "react";

const Sort = ({ handleSort }) => {
  // State to track the selected sort option
  const [selectedSort, setSelectedSort] = useState("");
  
  // Array of sort options available for the user
  const sortitems = ["price high to low", "price low to high"];

  // Function to handle changes in the dropdown selection
  const handleChange = (e) => {
    const selected = e.target.value;  // Get the selected option value
    setSelectedSort(selected);        // Update the selectedSort state
    handleSort(selected);             // Call the handleSort function passed as a prop
  };

  return (
    <div className="Sort-filter mb-6">
      {/* Title for the sorting section */}
      <h1 className="text-lg font-semibold mb-2">Sort By</h1>
      <select
        value={selectedSort} // Value of the select dropdown
        onChange={handleChange} // Trigger handleChange on selection change
        className="w-44 p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        {/* Map over the sort items array to create <option> elements */}
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
