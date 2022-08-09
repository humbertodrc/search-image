import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {ImagesProvider} from './context/ImagesContext'
import { LoginProvider } from './context/LoginContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginProvider>
      <ImagesProvider>
        <App />
      </ImagesProvider>
    </LoginProvider>
  </React.StrictMode>
)
