import React from 'react'
import SingleEstate from '../components/SingleEstate'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const ViewListing = () => {
  const estates = useSelector(state => state.estates)
  const userId = JSON.parse(localStorage.getItem('user')).id

  const handleUpdate = () => {
    console.log('update')
  }
  const handleDelete = () => {
    console.log('delete')
  }

  return (
    <div>
      <NavLink to={'/dashboard'} className='absolute left-2 top-3 bg-black text-white font-bold px-1 py-0.5 rounded'>
        Back
      </NavLink>
      <h2 className='text-center m-5 text-4xl font-bold text-heading-color underline-offset-1'>
        My Properties
      </h2>
      <ul className='flex flex-wrap justify-center items-center'>
        {estates.estates &&
          estates.estates
            .filter(estate => estate.user_id === userId)
            .map(estate => {
              return (
                <li key={estate._id} className='border m-6'>
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
                  <div className='flex justify-center items-center'>
                    <button
                      className='bg-black text-white m-2 px-4 py-2 rounded'
                      type='button'
                      onClick={handleUpdate}
                    >
                      Update
                    </button>
                    <button
                      className='bg-black text-white m-4 px-4 py-2 rounded'
                      type='button'
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              )
            })}
      </ul>
    </div>
  )
}

export default ViewListing
