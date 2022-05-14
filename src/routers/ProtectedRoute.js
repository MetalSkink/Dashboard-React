import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({children,expectedRole }) => {
  const {rol} = useSelector(state => state.auth);

  return expectedRole.includes(rol) 
    ? children
    : <Navigate to="/products" />
}
