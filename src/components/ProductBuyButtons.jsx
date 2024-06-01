import React from 'react'
import { useNavigate } from 'react-router-dom'
import useCart from '../hooks/useCart'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../redux/cart/cart'

const ProductBuyButtons = ({id, quantity}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [cart] = useCart(id, quantity)
  const handleBuy = () => {
    dispatch(addItemToCart(cart));
    navigate('/cart')
  }
  return (
    <div className='product-buy-btn-container'>
      <button type='button' id={id} className='product-buy-btn' onClick={handleBuy}>
        Buy
      </button>
      <button type='button' id={id} className='product-buy-btn'>
        Add to cart
      </button>
    </div>
  )
}

export default ProductBuyButtons;
