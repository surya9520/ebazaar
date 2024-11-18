import { useCartContext } from "../contexts/cartContext";

const CartItem = ({ product}) => {
  const { decQuantity, removeItem, incQuantity } = useCartContext();
  const { id, title, price, image } = product;
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-between border-b pb-4">
        <div className="flex items-center space-x-4">
          <img
            src={image || "https://via.placeholder.com/80"}
            alt="Product"
            className="w-20 h-20 object-contain rounded-lg"
          />
          {/* Quantity Selector */}
          <div className="quantity-box flex items-center gap-6 mb-8">
            <h3 className="text-xl font-medium">Quantity:</h3>
            <button
              className="text-lg font-bold bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
              onClick={() => {
                if (product.quantity > 1) {
                  decQuantity(id);
                } else {
                  removeItem(id);
                }
              }}
            >
              -
            </button>
            <span className="text-lg font-medium">{product.quantity}</span>
            <button
              className="text-lg font-bold bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
              onClick={() => {
                incQuantity(id);
              }}
            >
              +
            </button>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700">
              {title || "Product Name"}
            </h2>
          </div>
        </div>
        <div className="text-right mt-4 sm:mt-0">
          <p className="text-lg font-medium text-gray-800">${price || 0.0}</p>
          <button className="text-sm text-red-500 hover:underline mt-2">
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
