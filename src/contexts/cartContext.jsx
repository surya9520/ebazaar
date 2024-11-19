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
const AddtoCart=(product,quantity=1)=>{
    dispatch({type:"AddToCart",payload:{...product,quantity}})
}
const removeItem=(id)=>{
    dispatch({type:"RemoveItem",payload:{id}})
}
const decQuantity=(id)=>{
    dispatch({type:"decItem",payload:{id}})
}
const incQuantity=(id)=>{
    dispatch({type:"incItem",payload:{id}})
}
  return (
    <>
    <cartContext.Provider value={{...state,AddtoCart,removeItem,decQuantity,incQuantity}}>
        {children}
    </cartContext.Provider>
    </>
  )
}

const useCartContext=()=>{
    return useContext(cartContext)
}

export  {CartContextProvider,useCartContext}