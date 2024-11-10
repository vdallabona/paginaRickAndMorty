import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Episodes from './pages/Episodes'
import Duck from './pages/Duck'
import Characters from './pages/characters'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />

      <div class="stars">
        <div class="star"></div>
      </div>

      <Routes>
        <Route path='/Episodes' element={<Episodes />}/>
        <Route path='/Duck' element={<Duck />}/>
        <Route path='/' element={<Characters />}/>
      </Routes>
      <Footer />
    </>
  )
}
export default App