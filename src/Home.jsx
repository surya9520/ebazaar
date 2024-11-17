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

  // Handle Category Filter Change
  const handleCategoryChange = (category) => {
    let filterProducts = products.filter((product) => {
      if (category === "") return true;
      return product.category.toLowerCase() === category.toLowerCase();
    });
    setFilteredProducts(filterProducts);
  };

  // Handle Search Bar Input
  const handleOnSearchChange = (search) => {
    let searchProducts = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(searchProducts);
  };

  // Sort products high to low based on price
  const highToLow = () => {
    const sortedProduct = [...products].sort((a, b) => b.price - a.price);
    setFilteredProducts(sortedProduct);
  };

  // Sort products low to high based on price
  const lowToHigh = () => {
    const sortedProduct = [...products].sort((a, b) => a.price - b.price);
    setFilteredProducts(sortedProduct);
  };

  // Handle Sorting based on selected option
  const handleSort = (value) => {
    switch (value) {
      case "price high to low":
        highToLow();
        break;
      case "price low to high":
        lowToHigh();
        break;
    }
  };

  // Fetch Products from API
  const fetchProducts = async (url) => {
    try {
      let response = await fetch(url);
      let data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
      let productCategories = [
        ...new Set(data.map((product) => product.category)),
      ];
      setCategories(productCategories);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(productUrl);
  }, []);

  return (
    <>
      <div className="container w-full flex flex-col sm:flex-row justify-between py-6 px-4">
        <SearchBar handleOnSearchChange={handleOnSearchChange} />
        
        {/* Filter Container: Includes Category Filter and Sort */}
        <div className="filter-container flex flex-col items-center sm:flex-row sm:space-x-4 mt-6 sm:mt-0">
          <div className="category-filter w-full sm:w-auto">
            <CategoryFilter
              categories={categories}
              handleCategoryChange={handleCategoryChange}
            />
          </div>

          <div className="sort-filter w-full sm:w-auto">
            <Sort handleSort={handleSort} />
          </div>
        </div>
      </div>

      {/* Product List */}
      <ProductList loading={loading} products={filteredProducts} />
    </>
  );
};

export default Home;
