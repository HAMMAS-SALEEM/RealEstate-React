import React, { useState } from 'react'

const QuantityController = ({ handleQuantity, qty = 1 }) => {
  const [quantity, setQuantity] = useState(qty)
  const increaseQuantity = () => setQuantity(prev => {
    handleQuantity(prev + 1);
    return prev + 1;
  });
  const decreaseQuantity = () => {
    setQuantity(prev => {
      if (prev > 1) {
        handleQuantity(prev - 1)
        return prev - 1
      } else {
        return prev
      }
    })
  }

  return (
    <div className='quantity-controller'>
      <button className='quantity-decreaser' onClick={decreaseQuantity}>
        -
      </button>
      <input
        className='quantity-screen'
        type='text'
        value={quantity}
        onChange={handleQuantity}
      />
      <button className='quantity-increaser' onClick={increaseQuantity}>
        +
      </button>
    </div>
  )
}

export default QuantityController;
