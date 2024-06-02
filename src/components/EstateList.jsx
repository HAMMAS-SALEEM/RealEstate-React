import React, { useEffect, useState } from 'react'
import { getApiEstates } from '../services/estates-service'
import { addEstates } from '../redux/products/products'
import { useDispatch, useSelector } from 'react-redux'
import SingleEstate from './SingleEstate'

const EstateList = () => {
  const dispatch = useDispatch()
  const realEstates = useSelector(store => store.estates)

  useEffect(() => {
    getApiEstates().then(estates => {
      dispatch(addEstates(estates.data.estates))
    })
  }, [dispatch])
  return (
    <>
      <h2 className='featured-properties-section-title'>FEATURED PROPERTIES</h2>
      <div className='estates-container'>
        {realEstates.estates &&
          realEstates.estates.map(estate => (
            <SingleEstate
              key={estate._id}
              id={estate._id}
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
    </>
  )
}

export default EstateList
