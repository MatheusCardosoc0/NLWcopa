import { createContext, DispatchWithoutAction, ReactNode, useContext, useReducer } from "react";

interface StateContextProviderProps{
  reducer: any
  children: ReactNode
  initialState: any
}

interface ContextProps{
  
}

export const StateContext = createContext({} as ContextProps)

export const StateContextProvider = ({children, initialState, reducer} : StateContextProviderProps) => {
  return(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateProvider = () => useContext(StateContext)