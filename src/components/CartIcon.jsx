import React from 'react'
import Cart from '../assets/cart.png'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CartIcon = () => {
  const quantity = useSelector((store) => store.cart.totalItems);

  return (
    <NavLink to="/cart">
      <span className={quantity ? "cart-quantity" : "hidden"}>{quantity}</span>
      <img src={Cart} alt="cart" />
    </NavLink>
  )
}

export default CartIcon;
