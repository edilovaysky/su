import React from 'react'
import { Provider } from 'jotai'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <App/>
    </Provider>
  </React.StrictMode>,
)
