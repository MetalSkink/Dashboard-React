import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from '../pages/Products/Products'
import Users from '../pages/Users'

const DashboardRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/products' element={<Products/>}/>
        <Route path='/users' element={<Users/>}/>

      </Routes>
    </>
  )
}

export default DashboardRoutes