import { createContext, DispatchWithoutAction, ReactNode, useContext, useReducer } from "react";



export const StateContext = createContext()

export const StateContextProvider = ({children, initialState, reducer}) => {
  return(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateProvider = () => useContext(StateContext)