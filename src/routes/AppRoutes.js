import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Inicio from '../pages/Inicio'

function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/Hotelia/' element={<Inicio/>} ></Route>

        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes