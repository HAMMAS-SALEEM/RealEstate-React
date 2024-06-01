import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const useQuantity = (id, qty) => {
  const cart = useSelector(store => store.cart);
  const [item, setItem] = useState([...cart]);
  let findItem = cart.cartItems.find((item) => +item.id === +action.payload.cart.id);
  findItem.quantity = qty;
  console.log(findItem);
  return [cart];
}

export default useQuantity
