import { useState } from 'react'
import { BrowserRouter, Routes, Router } from 'react-router-dom'

import NavBarComponent from './assets/components/NavBarComponent'



function App() {

  return (
    <>
      <BrowserRouter>
        <NavBarComponent />
      </BrowserRouter>
    </>
  )
}

export default App
