import React, { useState } from "react";

const CategoryFilter = ({ categories, handleCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleChange = (e) => {
    const selected = e.target.value;
    setSelectedCategory(selected);
    handleCategoryChange(selected);
  };

  return (
    <div className="category-filter mb-6">
      <h1 className="text-lg font-semibold mb-2">Category</h1>
      <select
        value={selectedCategory}
        onChange={handleChange}
        className="w-44 p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        {/* Non-selectable placeholder option */}
        <option value="">
          {categories.length === 0
            ? "No categories available"
            : "All Categories"}
        </option>

        {/* Render categories only if there are categories available */}
        {categories.length > 0 &&
          categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
