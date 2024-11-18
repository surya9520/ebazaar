import React from "react";
import { useCartContext } from "../contexts/cartContext";

const AddtoCart = ({product}) => {

  const {AddtoCart}=useCartContext();
  return (
    <>
      <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition" onClick={()=>{AddtoCart(product)}}>
        Add to Cart
      </button>
    </>
  );
};

export default AddtoCart;
