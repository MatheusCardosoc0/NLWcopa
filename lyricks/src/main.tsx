import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import reducer, { initialState } from './utils/reducer'
import { StateContextProvider } from './utils/SttateProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StateContextProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateContextProvider>
  </React.StrictMode>
)
