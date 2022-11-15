import { createContext } from "react";

export const CartContext = createContext({})

export const CartProvider = ({children}) => {

  const helloworld = "e"

  return(
    <CartContext.Provider value={{helloworld}}>
      {children}
    </CartContext.Provider>
  )
}