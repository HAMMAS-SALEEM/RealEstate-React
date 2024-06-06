import React, { useEffect, useState } from 'react'
import { getApiEstates } from '../services/estates-service'
import { addEstates } from '../redux/estates/estates'
import { useDispatch, useSelector } from 'react-redux'
import SingleEstate from './SingleEstate'
import Loader from './Loader'
import { NavLink } from 'react-router-dom'
import NoProperties from './NoProperties'

const EstateList = () => {
  const dispatch = useDispatch()
  const realEstates = useSelector(store => store.estates)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [noDataMessage, setNoDataMessage] = useState(false)

  const handleGetEstates = () => {
    setNoDataMessage(false)
    setError(false)
    setLoading(true)
    getApiEstates()
      .then(estates => {
        dispatch(addEstates(estates.data.estates))
        setLoading(false)
        setError(false)
        if (estates.data.estates.length === 0) {
          setNoDataMessage(true)
        }
      })
      .catch(error => {
        console.log(error)
        setLoading(false)
        setError(true)
        return error
      })
  }

  useEffect(() => {
    if (realEstates.estates.length === 0) {
      handleGetEstates()
    }
  }, [])
  return (
    <>
      <h2 className='featured-properties-section-title text-heading-color'>
        FEATURED PROPERTIES
      </h2>
      {loading && (
        <div className='flex justify-center'>
          <Loader />
        </div>
      )}
      <div className='estates-container'>
        {realEstates.estates &&
          realEstates.estates.map(estate => (
            <NavLink key={estate._id} to={`/estate/${estate._id}`}>
              <SingleEstate
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
            </NavLink>
          ))}
        {noDataMessage && <NoProperties />}
        {error && (
          <button
            className='bg-red-500 text-white px-4 py-2 mb-1'
            onClick={handleGetEstates}
          >
            Try Again
          </button>
        )}
      </div>
    </>
  )
}

export default EstateList
