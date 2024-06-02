import React, { useEffect, useState } from 'react'
import { getApiEstates } from '../services/estates-service'
import { addEstates } from '../redux/estates/estates'
import { useDispatch, useSelector } from 'react-redux'
import SingleEstate from './SingleEstate'

const EstateList = () => {
  const dispatch = useDispatch()
  const realEstates = useSelector(store => store.estates)
  const [error, setError] = useState(false)

  const handleGetEstates = () => {
    getApiEstates()
    .then(estates => {
      dispatch(addEstates(estates.data.estates))
      setError(false);
    })
    .catch((error) => {
      setError(true);
      return error;
    })
  }

  useEffect(() => {
    handleGetEstates()
  }, [])
  return (
    <>
      <h2 className='featured-properties-section-title text-heading-color'>FEATURED PROPERTIES</h2>
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
          {error && <button className="bg-red-500 text-white px-4 py-2 mb-1" onClick={handleGetEstates}>Try Again</button>}
      </div>
    </>
  )
}

export default EstateList
