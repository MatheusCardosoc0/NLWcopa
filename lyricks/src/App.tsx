import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './components/Login'
import { useStateProvider } from './utils/SttateProvider'
import { reducerCases } from './utils/Constants'

interface a {
  token: any
  dispatch: any
}

function App() {

  const [{ token },dispatch] = useStateProvider()

  useEffect(() => {
    const hash = window.location.hash

    if(hash){
      const token = hash.substring(1).split("&")[0].split("=")[1]

      dispatch({action: reducerCases.SET_TOKEN, token})
    }
  },[token, dispatch])

  return (
    <div className="App">
      <Login />
    </div>
  )
}

export default App
