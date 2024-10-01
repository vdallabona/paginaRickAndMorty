import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import APIRM from './pages/APIRM'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/Home' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/' element={<APIRM />}/>
      </Routes>

      <Footer />
    </>
  )
}

export default App