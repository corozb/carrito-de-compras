const CartItem = ({ data, removeOne, removeAll }) => {
  let { name, price, quantity } = data

  return (
    <div style={{ borderBottom: 'thin solid gray' }}>
      <h4>{name}</h4>
      <h5>
        ${price}.00 x {quantity} = ${price * quantity}.00
      </h5>
      <button onClick={removeOne}>Eliminar Uno</button>
      <br />
      <button onClick={removeAll}>Eliminar Todos</button>
      <br />
      <br />
    </div>
  )
}

export default CartItem
