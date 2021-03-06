import React from 'react'
import { useNavigate } from 'react-router'
import ShoppingCart from './components/ShoppingCart'

export default function StateApp() {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate('/')}>back</button>
      <h2>Using useState</h2>
      <hr />
      <ShoppingCart />
    </div>
  )
}
