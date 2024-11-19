import { useCartContext } from "../contexts/cartContext";

const CartItem = ({ product }) => {
  const { decQuantity, removeItem, incQuantity } = useCartContext();
  const { id, title, price, image, quantity } = product;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-200 py-4">
      {/* Product Image and Details */}
      <div className="flex items-center space-x-4 w-full sm:w-2/3">
        <img
          src={image || "https://via.placeholder.com/80"}
          alt={title || "Product"}
          className="w-20 h-20 object-contain rounded-lg border border-gray-300"
        />
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-800">
            {title.length > 20
              ? `${title.slice(0, 20)}...`
              : title || "Product Name"}
          </h3>

          <p className="text-gray-500 mt-1">${price?.toFixed(2) || "0.00"}</p>
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center space-x-4 mt-4 sm:mt-0">
        <button
          className="text-lg font-bold bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
          onClick={() => (quantity > 1 ? decQuantity(id) : removeItem(id))}
        >
          -
        </button>
        <span className="text-lg font-medium">{quantity || 1}</span>
        <button
          className="text-lg font-bold bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
          onClick={() => incQuantity(id)}
        >
          +
        </button>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => removeItem(id)}
        className="text-sm text-red-500 hover:underline mt-4 sm:mt-0"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
