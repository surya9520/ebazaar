import React, { createContext, useContext, useReducer } from 'react'
import reducer from "../reducers/cartReducer"
const cartContext=createContext()

const CartContextProvider = ({children}) => {
const initialState={
    cart:[],
    totalAmount:0,
    totalItem:0,
}
const [state,dispatch]=useReducer(reducer,initialState);    
const AddtoCart=(id,image,title,price,quantity=1)=>{
    dispatch({type:"AddToCart",payload:{id,image,title,price,quantity}})
}
  return (
    <>
    <cartContext.Provider value={{...state,AddtoCart}}>
        {children}
    </cartContext.Provider>
    </>
  )
}

const useCartContext=()=>{
    return useContext(cartContext)
}

export  {CartContextProvider,useCartContext}