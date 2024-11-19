import React from "react";
import { Link } from "react-router-dom";
import AddtoCart from "./AddtoCart";

const ProductCard = ({product}) => {
   const { image, title, price, id }=product;
  return (
    <>
      <div
        className="card-container w-72 h-96 bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between transform transition-transform 
      duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
      >
        <Link to={`/product/${id}`}>
          <div className="card-items text-center">
            {/* Product Image */}
            <img
              className="w-full h-40 object-contain rounded-lg"
              src={image || "https://via.placeholder.com/150"}
              alt={title}
            />

            {/* Product Name */}
            <h1 className="text-lg font-semibold mt-4 truncate max-w-xs">
              {title || "Product Title"}
            </h1>

            {/* Product Price */}
            <h2 className="text-xl font-bold text-gray-800 mt-2">
              ${price || "0.00"}
            </h2>
          </div>
        </Link>
        {/* Buttons */}
        <div className="buttons flex justify-between items-center mt-4">
          <Link to={`/product/${id}`}>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
              View Details
            </button>
          </Link>
          <AddtoCart product={product} />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
