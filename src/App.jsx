
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/Home'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ApplicationDataContext, { APplicationInitialData } from '../context/ApplicationData'
import { useEffect, useState } from 'react'

function App() {
  const [applicationData, setApplicationData] = useState(APplicationInitialData)
  
  useEffect(
    () => {
      
      async function getApplicationData() {
        const res = await (await (fetch(import.meta.env.VITE_APPLICATION_DB_URL))).json()
        setApplicationData(res)
      }

      getApplicationData()

    },
    []
  )

  return (
    <>
    <ApplicationDataContext.Provider value={applicationData}>
      <Header />
      <Routes>
        <Route
          index
          element={<HomePage />}
        />
      </Routes>
      <Footer />
    </ApplicationDataContext.Provider>
    </>
  )
}

export default App
