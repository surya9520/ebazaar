import React, { useEffect, useState } from "react";
import CartItem from "./components/CartItem";
import { useCartContext } from "./contexts/cartContext";

const CartPage = () => {
  const {totalItem,cart,totalAmount} = useCartContext();
  console.log(totalAmount)
useEffect(()=>{

},[cart,totalItem])
  console.log(cart);
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center sm:text-left">
          Your Cart
        </h1>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section: Cart Items */}
          <div className="flex-1 space-y-6">
            {cart.length>0?cart.map((product) => {
              return <CartItem key={product.id} product={product}/>
            }):  <p className="text-center text-gray-500 text-lg mt-10">
            No items in the cart
          </p>}
          </div>

          {/* Right Section: Order Summary */}
          <div className="w-full lg:w-1/3 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Order Summary
            </h2>
            <div className="flex justify-between text-gray-600 mb-2">
              <p>Subtotal:</p>
              <p>₹ {totalAmount||0}</p>
            </div>
            <div className="flex justify-between text-gray-600 mb-2">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between text-lg font-bold text-gray-800">
              <p>Total items:</p>
              <p>{totalItem||0}</p>
            </div>
            <div className="flex justify-between text-lg font-bold text-gray-800">
              <p>Total:</p>
              <p>₹ {totalAmount||0}</p>
            </div>
            <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg text-lg hover:bg-blue-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
