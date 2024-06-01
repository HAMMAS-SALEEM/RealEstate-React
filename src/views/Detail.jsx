import React, { useState } from 'react'
import AppLayout from '../layout/AppLayout'
import ProductBuyButtons from '../components/ProductBuyButtons'
import QuantityController from '../components/QuantityController'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Detail = () => {
  const [quantity, setQuantity] = useState(1)

  const products = useSelector(store => store.products.products)

  const { id } = useParams()

  const handleQuantity = (value) => setQuantity(value);

  return (
    <div>
      {products &&
        products.map(product => {
          if (+product.id === +id) {
            return (
              <div className='product-detail-card' key={product.id}>
                <img
                  src={product.image}
                  alt={product.image}
                  className='product-detail-image'
                />
                <div className='product-detail-sub-container'>
                  <h3 className='product-title product-detail-title'>
                    {product.title}
                  </h3>
                  <p className='product-description product-detail-title'>
                    {product.description}
                  </p>
                  <span className='product-price product-detail-price'>
                    {product.price}$
                  </span>
                  <QuantityController
                    handleQuantity={handleQuantity}
                    qty={quantity}
                  />
                  <ProductBuyButtons id={product.id} quantity={quantity} />
                </div>
              </div>
            )
          }
          return null
        })}
    </div>
  )
}

export default AppLayout()(Detail)
