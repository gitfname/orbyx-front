import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ApplicationLanguageProvider } from '../hooks/useApplicationLanguage.jsx'
import Loading from '../pages/Loading'
import "../lib/vanilla-tilt.babel.min.js"
// import LoadHomePageDetails from '../components/DataLoaders/LoadHomePageDetails'
// const sleep = async (ms) => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve()
//     }, ms);
//   })
// }

// const App = lazy(async () => {
//   await sleep(4500)
//   return import("./App.jsx")
// })
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/orbyx-front'>
      <ApplicationLanguageProvider>
        <Suspense fallback={<Loading />}>
          <App />
        </Suspense>
      </ApplicationLanguageProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
