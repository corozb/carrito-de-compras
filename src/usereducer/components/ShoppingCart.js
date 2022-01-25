import { useReducer } from 'react'
import { shoppingInitialState, shoppingReducer } from '../reducers/shoppingReducer'
import { TYPES } from '../actions/shoppingActions'
import ProductItem from './ProductItem'
import CartItem from './CartItem'

function ShoppingCart() {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)
  const { products, cart } = state

  const addToCart = (id) => dispatch({ type: TYPES.ADD_TO_CART, payload: id })

  const removeCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id })
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id })
    }
  }

  const clearCart = () => dispatch({ type: TYPES.CLEAR_CART })

  return (
    <div>
      <h3>Productos</h3>
      <article className='box grid-responsive'>
        {products.map((product) => (
          <ProductItem key={product.id} data={product} addToCart={addToCart} />
        ))}
      </article>
      <h3>Carrito</h3>
      <article className='box'>
        <button onClick={clearCart}>Limpiar Carrito</button>
        {cart.map((item, index) => (
          <CartItem key={index} data={item} removeCart={removeCart} />
        ))}
      </article>
    </div>
  )
}

export default ShoppingCart
