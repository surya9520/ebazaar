const cartReducer = (state, action) => {
    let product = action.payload;
  
    switch (action.type) {
      // Add product to cart
      case "AddToCart":
        // Check if the product already exists in the cart
        let existingProduct = state.cart.find((pro) => pro.id === product.id);
        if (existingProduct) {
          alert("item already in cart");  // Alert if product is already in the cart
          return state;
        }
        return {
          ...state,
          cart: [...state.cart, product],  // Add the new product to the cart
          totalItem: state.totalItem + 1,   // Increase total item count
          totalAmount: (state.totalAmount + product.price),  // Update total amount
        };
  
      // Remove product from cart
      case "RemoveItem":
        const newCart = state.cart.filter(
          (product) => product.id !== action.payload.id  // Filter out the removed product
        );
        let removeproduct = state.cart.find((pro) => pro.id === product.id);
        if (removeproduct) {
          return { 
            ...state,
            cart: newCart,  // Update the cart without the removed product
            totalItem: state.totalItem - 1,  // Decrease item count
            totalAmount: state.totalAmount - removeproduct.price  // Decrease total amount
          };
        }
        return {
          ...state,
          cart: newCart,  // Just update the cart in case the product doesn't exist
        };
  
      // Decrease quantity of product in the cart
      case "decItem":
        let decProduct = state.cart.find((pro) => pro.id === product.id);
        decProduct.quantity--;  // Decrease quantity of the selected product
        return {
          ...state,
          totalItem: state.totalItem - 1,  // Decrease total item count
          totalAmount: state.totalAmount - decProduct.price,  // Decrease total amount
        };
  
      // Increase quantity of product in the cart
      case "incItem":
        let incProduct = state.cart.find((pro) => pro.id === product.id);
        incProduct.quantity++;  // Increase quantity of the selected product
        return {
          ...state,
          totalItem: state.totalItem + 1,  // Increase total item count
          totalAmount: state.totalAmount + incProduct.price,  // Increase total amount
        };
  
      default:
        return state;  // Return the current state if no action matches
    }
  };
  
  export default cartReducer;
  