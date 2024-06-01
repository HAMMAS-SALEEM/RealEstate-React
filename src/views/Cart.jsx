import React from 'react'
import CartItem from '../components/CartItem'
import { NavLink } from'react-router-dom'
import { useSelector } from 'react-redux'

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);

  return (
    <div className="cart-overall">
      <table className='cart-table'>
        <thead className='cart-table-head'>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Remove</th>
          </tr>
        </thead>
        {cartItems.map(item => {
          return (
            cartItems && <CartItem
              key={item.id}
              id={item.id}
              name={item.title}
              price={item.price}
              qty={item.quantity}
              img={item.image}
            />
          )
        })}
      </table>
      <NavLink to="/checkout" className="checkout-link">Proceed to checkout</NavLink>
    </div>
  )
}

export default Cart;
