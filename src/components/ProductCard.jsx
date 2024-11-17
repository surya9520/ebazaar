import React from 'react';

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="card-container w-72 h-96 bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between">
      <div className="card-items text-center">
        {/* Product Image */}
        <img
          className="w-full h-40 object-cover rounded-lg"
          src={image || "https://via.placeholder.com/150"}
          alt={name}
        />
        
        {/* Product Name */}
        <h1 className="text-lg font-semibold mt-4">{name || "Product Title"}</h1>
        
        {/* Product Price */}
        <h2 className="text-xl font-bold text-gray-800 mt-2">${price || "0.00"}</h2>
      </div>

      {/* Buttons */}
      <div className="buttons flex justify-between items-center mt-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
          View Details
        </button>
        <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
