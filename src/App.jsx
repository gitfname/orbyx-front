
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/Home'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ApplicationDataContext, { APplicationInitialData } from '../context/ApplicationData'
import { useContext, useEffect, useMemo, useState } from 'react'
import { ApplicationLanguageContetx, useApplicationLanguage } from '../hooks/useApplicationLanguage'
// import useApplicationLanguage from '../hooks/useApplicationLanguage'

function App() {
  const [applicationData, setApplicationData] = useState(APplicationInitialData)
  // const [lang] = useApplicationLanguage()
  const [lang] = useContext(ApplicationLanguageContetx)

  useEffect(
    () => {
      if(lang.lang === "pr") {
        const link = document.createElement("link")
        link.rel = "stylesheet"
        link.href= import.meta.env.BASE_URL+"/index-pr.css"
  
        document.head.append(link)
      }
      else {
        const link = document.createElement("link")
        link.rel = "stylesheet"
        link.href= import.meta.env.BASE_URL+"/index-en.css"

        document.head.append(link)
      }
    },
    [lang.lang]
  )
  
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
