import { TYPES } from '../actions/shoppingActions'

export const shoppingInitialState = {
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

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      const addItem = state.products.find((product) => product.id === action.payload)

      const itemInCart = state.cart.find((item) => item.id === addItem.id)

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) => (item.id === addItem.id ? { ...item, quantity: item.quantity++ } : item)),
          }
        : {
            ...state,
            cart: [...state.cart, { ...addItem, quantity: 1 }],
          }
    }

    case TYPES.REMOVE_ONE_FROM_CART: {
      const itemDelete = state.cart.find((item) => item.id === action.payload)

      return itemDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? {
                    ...item,
                    quantity: item.quantity--,
                  }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          }
    }

    case TYPES.REMOVE_ALL_FROM_CART: {
      const deleteAll = state.cart.filter((item) => item.id !== action.payload)

      return {
        ...state,
        cart: deleteAll,
      }
    }

    case TYPES.CLEAR_CART:
      return shoppingInitialState

    default:
      return state
  }
}
