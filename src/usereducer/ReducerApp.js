import React from 'react'
import ShoppingCart from './components/ShoppingCart'
import { useNavigate } from 'react-router'

export default function ReducerApp() {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate('/')}>back</button>
      <h2>Using useReducer</h2>
      <hr />
      <ShoppingCart />
    </div>
  )
}
