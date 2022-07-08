import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Formaliz from '../pages/Formsearch'

function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/formaliz' element={<Formaliz/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes