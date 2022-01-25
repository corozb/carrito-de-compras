import { useState } from 'react'
import ProductItem from './ProductItem'
import CartItem from './CartItem'

const shoppingInitialState = {
  products: [
    { id: 1, name: 'Producto 1', price: 100 },
    { id: 2, name: 'Producto 2', price: 200 },
    { id: 3, name: 'Producto 3', price: 300 },
    { id: 4, name: 'Producto 4', price: 400 },
    { id: 5, name: 'Producto 5', price: 500 },
    { id: 6, name: 'Producto 6', price: 600 },
  ],
  cart: [],
}

function ShoppingCart() {
  const [shopping, setShopping] = useState(shoppingInitialState)
  const { products, cart } = shopping

  const addToCart = (id) => {
    const addItem = products.find((product) => product.id === id)

    const itemInCart = cart.find((item) => item.id === addItem.id)

    return itemInCart
      ? setShopping({
          ...shopping,
          cart: cart.map((item) => (item.id === addItem.id ? { ...item, quantity: item.quantity + 1 } : item)),
        })
      : setShopping({
          ...shopping,
          cart: [...cart, { ...addItem, quantity: 1 }],
        })
  }

  const removeCart = (id, all = false) => {
    const deleteAll = cart.filter((item) => item.id !== id)

    if (all) {
      setShopping({
        ...shopping,
        cart: deleteAll,
      })
    } else {
      const itemDelete = cart.find((item) => item.id === id)

      itemDelete.quantity > 1
        ? setShopping({
            ...shopping,
            cart: cart.map((item) =>
              item.id === id
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                  }
                : item
            ),
          })
        : setShopping({
            ...shopping,
            cart: deleteAll,
          })
    }
  }

  const clearCart = () => setShopping(shoppingInitialState)

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
