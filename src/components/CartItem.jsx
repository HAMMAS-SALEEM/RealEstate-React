import React from 'react'
import QuantityController from './QuantityController'
import { updateItemQuantity } from '../redux/cart/cart';
import { useDispatch, useSelector } from 'react-redux';
import useQuantity from '../hooks/useQuantity';

const CartItem = ({ id, name, price, qty, img }) => {
  const dispatch = useDispatch();
  const store = useSelector(store => store.cart);

  const handleQuantity = (updatedQty) => {
    console.log(updatedQty);
    const [cart] = useQuantity(id, updatedQty)
    // let status = "";
    // if (updatedQty > qty) {
    //   status = "increase";
    // } else {
    //   status = "decrease";
    // }
    // dispatch(updateItemQuantity({id, updatedQty, status}));
    // console.log(store);
  };

  return (
      <tbody className='cart-container'>
        <tr>
          <td className='cart-name-image-container'>
            <img src={img} alt={img} className='cart-img' />
            <h3 className='cart-name'>{name}</h3>
          </td>
          <td className='cart-price'>{price}</td>
          <td className='cart-qty'>
            <QuantityController handleQuantity={handleQuantity} qty={qty} />
          </td>
          <td className="remove-item-btn-cart">
            <button type='button' id={id} className='cart-remove-btn'>
              Remove Item
            </button>
          </td>
        </tr>
      </tbody>
  )
}

export default CartItem;
