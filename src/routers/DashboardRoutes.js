import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from '../pages/Products/ProductDetails'
import ProductForm from '../pages/Products/ProductForm'
import Products from '../pages/Products/Products'
import Users from '../pages/Users'

const DashboardRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product/:productId' element={<ProductDetails/>}/>
        <Route path='/add-product' element={<ProductForm/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path="/" element={<Products />} />
      </Routes>
    </>
  )
}

export default DashboardRoutes