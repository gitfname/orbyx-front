
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/Home'
import Header from '../components/Header'
import Footer from '../components/Footer'

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route
        index
        element={<HomePage />}
      />
    </Routes>
    <Footer />
    </>
  )
}

export default App
