import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productUrl } from "../helper";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const fetchProduct = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProduct(productUrl + id);
  });

  return (
    <>
      {/* <div className="product-detail flex flex-col lg:flex-row items-start lg:items-center gap-12 p-8 bg-gray-100 rounded-lg shadow-lg"> */}
      {loading ? (
        <div className="text-center text-xl font-semibold text-gray-600">
          Loading.....
        </div>
      ) : (
        <>
          <div className="product-detail flex flex-col lg:flex-row items-start lg:items-center gap-12 p-8 bg-gray-100 rounded-lg shadow-lg">
            <div className="product-image w-full lg:w-2/5 flex justify-center">
              <img
                className="w-80 h-80 object-contain rounded-lg"
                src={product.image || "https://via.placeholder.com/150"}
                alt={product.title || "Product Image"}
              />
            </div>

            {/* Product Details Section */}
            <div className="details w-full lg:w-3/5 lg:ml-12">
              {/* Product Name */}
              <h1 className="text-3xl font-bold mb-6">
                {product.title || "Product Title"}
              </h1>

              {/* Product Description */}
              <p className="text-gray-700 text-lg mb-6">
                {product.description || "Product description not available."}
              </p>

              {/* Product Price */}
              <h2 className="text-2xl font-semibold text-green-600 mb-8">
                ${product.price || "0.00"}
              </h2>

              {/* Quantity Selector */}
              <div className="quantity-box flex items-center gap-6 mb-8">
                <h3 className="text-xl font-medium">Quantity:</h3>
                <button
                  className="text-lg font-bold bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
                  onClick={() => {
                    if (quantity > 0) setQuantity(quantity - 1);
                  }}
                >
                  -
                </button>
                <span className="text-lg font-medium">{quantity}</span>
                <button
                  className="text-lg font-bold bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>

              <div className="buttons flex gap-6">
                <button className="bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-600 transition">
                  Buy Now
                </button>

                {/* Add to Cart Button */}
                <button className="bg-green-500 text-white py-3 px-8 rounded-lg hover:bg-green-600 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetail;
