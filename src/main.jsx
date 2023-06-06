import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ApplicationLanguageProvider } from '../hooks/useApplicationLanguage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/orbyx-front'>
      <ApplicationLanguageProvider>
        <App />
      </ApplicationLanguageProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
