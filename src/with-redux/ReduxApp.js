import React from 'react'
import { useNavigate } from 'react-router'

import { Provider } from 'react-redux'
import ShoppingCart from './components/ShoppingCart'
import store from './store'

export default function ReduxApp() {
  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => navigate('/')}>back</button>
      <h2>Using Redux</h2>
      <hr />
      <Provider store={store}>
        <ShoppingCart />
      </Provider>
    </div>
  )
}
