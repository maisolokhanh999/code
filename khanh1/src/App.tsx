import { useState } from 'react'
import { Route, Routes } from 'react-router';
import './App.css'

function App() {
  return(
     <div className='app w-screen min-h-screen bg-[#F0F4F5]'>
      <Routes>
        <Route path='/' element={<h1>home</h1>} />
        <Route path='/services' element={<h1>Services</h1>} />
        <Route path='/about' element={<h1>About</h1>} />
        <Route path='/contact' element={<h1>Contact</h1>} />
      </Routes>
    </div>
  )
}

export default App
