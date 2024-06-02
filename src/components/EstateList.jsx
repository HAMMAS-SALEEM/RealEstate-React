import React, { useEffect, useState } from 'react'
import { getApiProducts } from '../services/products-service'
import { addProducts } from '../redux/products/products'
import { useDispatch } from 'react-redux'
import realEstates from '../data/realEstates'
import SingleEstate from './SingleEstate'

const EstateList = () => {
  return (
    <div className='estates-container'>
      {realEstates.estates &&
        realEstates.estates.map(estate => (
          <SingleEstate
            key={estate.id}
            id={estate.id}
            name={estate.name}
            propertySize={estate.propertySize}
            price={estate.price}
            image={estate.image}
            bedrooms={estate.bedrooms}
            bathrooms={estate.bathrooms}
            address={estate.address}
            type={estate.type}
          />
        ))}
    </div>
  )
}

export default EstateList
