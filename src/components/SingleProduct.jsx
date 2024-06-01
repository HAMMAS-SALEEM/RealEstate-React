import React from 'react'
import ProductBuyButtons from './ProductBuyButtons'
import { NavLink } from 'react-router-dom';

const SingleProduct = ({ id, name, description, price, image }) => {
  return (
    <div className='product-card'>
      <img src={image} alt={name} className='product-image' />
      <h3 className='product-title'>{name}</h3>
      <p className='product-description'>{description}</p>
      <span className='product-price'>{price}$</span>
      <ProductBuyButtons id={id} quantity={1} />
      <NavLink to={`/product/${id}`} className="product-link-to-details">See Details</NavLink>
    </div>
  )
}

export default SingleProduct;
