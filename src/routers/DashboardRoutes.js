import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoute'
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
        <Route path='/add-product' element={
          <ProtectedRoute expectedRole={["admin","moderator"]}>
            <ProductForm/>
          </ProtectedRoute>
        }/>
        <Route path='/edit-product/:productId' element={<ProductForm/>}/>
        <Route path='/users' element={
          <ProtectedRoute expectedRole={["admin"]}>
            <Users/>
          </ProtectedRoute>
          }/>
        <Route path="/" element={<Products />} />
      </Routes>
    </>
  )
}

export default DashboardRoutes