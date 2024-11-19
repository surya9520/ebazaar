import React, { useEffect, useState } from "react";
import { productUrl } from "./helper";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import Sort from "./components/Sort";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Handle Category Filter Change
  const handleCategoryChange = (category) => {
    const filtered = products.filter((product) =>
      category === ""
        ? true
        : product.category.toLowerCase() === category.toLowerCase()
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  // Handle Search Bar Input
  const handleOnSearchChange = (search) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  // Sort products high to low based on price
  const highToLow = () => {
    const sorted = [...filteredProducts].sort((a, b) => b.price - a.price);
    setFilteredProducts(sorted);
  };

  // Sort products low to high based on price
  const lowToHigh = () => {
    const sorted = [...filteredProducts].sort((a, b) => a.price - b.price);
    setFilteredProducts(sorted);
  };

  // Handle Sorting
  const handleSort = (value) => {
    switch (value) {
      case "price high to low":
        highToLow();
        break;
      case "price low to high":
        lowToHigh();
        break;
      default:
        break;
    }
    setCurrentPage(1);
  };

  // Fetch Products
  const fetchProducts = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
      const uniqueCategories = [
        ...new Set(data.map((product) => product.category)),
      ];
      setCategories(uniqueCategories);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(productUrl);
  }, []);

  // Get Current Page Products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Handle Pagination
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle Previous and Next
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <div className="container w-full flex flex-col sm:flex-row justify-between py-6 px-4">
        <SearchBar handleOnSearchChange={handleOnSearchChange} />
        <div className="filter-container flex flex-col items-center sm:flex-row sm:space-x-4 mt-6 sm:mt-0">
          <CategoryFilter
            categories={categories}
            handleCategoryChange={handleCategoryChange}
          />
          <Sort handleSort={handleSort} />
        </div>
      </div>

      {/* Product List */}
      <ProductList loading={loading} products={currentProducts} />

      {/* Pagination */}
      <div className="pagination-container flex justify-center items-center mt-6 space-x-2">
        {/* Previous Button */}
        <button
          className={`px-4 py-2 rounded-lg ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {/* Page Buttons */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`px-4 py-2 rounded-lg ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          className={`px-4 py-2 rounded-lg ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Home;
