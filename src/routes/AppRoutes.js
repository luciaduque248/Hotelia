import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin_Dashboard from '../admin/Dashboard'
import Inicio from '../pages/Inicio'
import User_Dashboard from '../user/Dashboard'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Hotelia/' element={<Inicio />} ></Route>
        <Route path='/Admin-Dashboard' element={<Admin_Dashboard />}></Route>
        <Route path='/User-Dashboard' element={<User_Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes