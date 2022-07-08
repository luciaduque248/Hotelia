import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListHabs from '../Admin/ListHabs'

import Inicio from '../pages/Inicio'

function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/Hotelia/' element={<Inicio/>} ></Route>


            <Route path='/Hotelia/list-habitaciones' element={<ListHabs/>} ></Route>

        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes