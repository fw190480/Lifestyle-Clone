import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartPage from './CartPage'
import LandingPage from './LandingPage'
import PaymentPage from './PaymentPage'
import ProductPage from './ProductPage'

const AllRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/product' element={<ProductPage />}/>
        <Route path='/cart' element={<CartPage />}/>
        <Route path='/payment' element={<PaymentPage />}/>
    </Routes>
  )
}

export default AllRoute