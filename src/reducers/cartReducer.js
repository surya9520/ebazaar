const cartReducer = (state, action) => {
  let product = action.payload;
  switch (action.type) {
    case "AddToCart":
      let existingProduct = state.cart.find((pro) => pro.id === product.id);
      if (existingProduct) {
        alert("item already in cart");
        return state;
      }
      return {
        ...state,
        cart: [...state.cart, product],
        totalItem: state.totalItem + 1,
        totalAmount:state.totalAmount+product.price
      };

    case "RemoveItem":
      const newCart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
      return {
        ...state,
        cart: newCart,
      };
    case "decItem":
     let decProduct=state.cart.find((pro)=> pro.id===product.id)
     decProduct.quantity--;
      return {
        ...state,
        totalItem: state.totalItem - 1,
        totalAmount:state.totalAmount-decProduct.price
      };
    case "incItem":
        let incProduct=state.cart.find((pro)=> pro.id===product.id)
        incProduct.quantity++;
      return {
        ...state,
        totalItem: state.totalItem + 1,
        totalAmount:state.totalAmount+incProduct.price
      };

    default:
      return state;
  }
};
export default cartReducer;
