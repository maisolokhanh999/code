import { useState } from 'react'
import { Route, Routes } from 'react-router';
import './App.css'

function App() {
  return(
     <div className='app w-screen min-h-screen bg-[#F0F4F5]'>
      <Routes>
        <Route path='' element={<h1>Hello MindX</h1>} />

      </Routes>
    </div>
  )
}

export default App
