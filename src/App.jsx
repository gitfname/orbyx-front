
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/Home'
import Header from '../components/Header'

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
    </>
  )
}

export default App
