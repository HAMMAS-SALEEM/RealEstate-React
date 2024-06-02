import React, { useState } from 'react'
import SingleEstate from '../components/SingleEstate'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { deleteEstateAPI } from '../services/estates-service'
import { removeEstate } from '../redux/estates/estates'

const ViewListing = () => {
  const estates = useSelector(state => state.estates)
  const userId = JSON.parse(localStorage.getItem('user')).id
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    console.log(e.target.id)
  }
  const handleDelete = async (e) => {
    const { id } = e.target
    const res = await deleteEstateAPI(id)
    console.log(res);
    if (res.status === 200) {
      dispatch(removeEstate(id))
      setSuccess(true)
      setError(false)
    } else {
      setSuccess(false)
      setError(true)
    }
  }

  return (
    <div>
      <NavLink to={'/dashboard'} className='absolute left-2 top-3 bg-black text-white font-bold px-1 py-0.5 rounded'>
        Back
      </NavLink>
      <h2 className='text-center m-5 text-4xl font-bold text-heading-color underline-offset-1'>
        My Properties
      </h2>
      {success && (
        <div className='text-center text-green-500 text-2xl font-bold'>
          Post Deleted Successfully
        </div>
      )}
      {error && (
        <div className='text-center text-red-500 text-2xl font-bold'>
          Something went wrong
        </div>
      )}
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
                      className='bg-black text-white m-2 px-4 py-2 rounded font-bold'
                      type='button'
                      onClick={handleUpdate}
                      id={estate._id}
                    >
                      Update
                    </button>
                    <button
                      className='bg-black text-white m-4 px-4 py-2 rounded font-bold'
                      type='button'
                      onClick={handleDelete}
                      id={estate._id}
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
