import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Duck from './pages/Duck'
import APIRM from './pages/APIRM'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />

      <div class="stars">
        <div class="star"></div>
      </div>

      <Routes>
        <Route path='/Home' element={<Home />}/>
        <Route path='/Duck' element={<Duck />}/>
        <Route path='/' element={<APIRM />}/>
      </Routes>
      <Footer />
    </>
  )
}
export default App