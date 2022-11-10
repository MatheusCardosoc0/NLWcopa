import { reducerCases } from "./Constants"

export const initialState = {
  token: null
}

interface reducerProps{
  state: any
  action: any
}

const reducer = ({state, action} : reducerProps) => {
  switch(action.type){
    case reducerCases.SET_TOKEN : {
      return {
        ...state,token: action.token,
      }
    }
    default:
      return state
  }
}

export default reducer