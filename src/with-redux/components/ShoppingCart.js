import { useDispatch, useSelector } from 'react-redux'

import { addToCart, clearCart, removeCart } from '../actions/shoppingActions'
import ProductItem from './ProductItem'
import CartItem from './CartItem'

function ShoppingCart() {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const { products, cart } = state.shopping

  return (
    <div>
      <h3>Productos</h3>
      <article className='box grid-responsive'>
        {products.map((product) => (
          <ProductItem key={product.id} data={product} addToCart={() => dispatch(addToCart(product.id))} />
        ))}
      </article>
      <h3>Carrito</h3>
      <article className='box'>
        <button onClick={() => dispatch(clearCart())}>Limpiar Carrito</button>
        {cart.map((item, index) => (
          <CartItem
            key={index}
            data={item}
            removeOne={() => dispatch(removeCart(item.id))}
            removeAll={() => dispatch(removeCart(item.id, true))}
          />
        ))}
      </article>
    </div>
  )
}

export default ShoppingCart
