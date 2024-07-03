import React from 'react'
import Navbar from './components/navabr/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/'/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/services' element={<Contact/>}/>
          <Route path='/about' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App