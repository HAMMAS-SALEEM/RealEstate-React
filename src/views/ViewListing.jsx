import React, { useState } from 'react'
import SingleEstate from '../components/SingleEstate'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { deleteEstateAPI } from '../services/estates-service'
import { removeEstate } from '../redux/estates/estates'
import ErrorMessage from '../components/ErrorMessage'
import SuccessMessage from '../components/SuccessMessage'

const ViewListing = () => {
  const estates = useSelector(state => state.estates)
  const userId = JSON.parse(localStorage.getItem('user')).id
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [visiblePopup, setVisiblePopup] = useState(false)
  const [info, setInfo] = useState({})

  const handleError = () => setError((prev) => !prev)
  const handleSuccess = () => setSuccess((prev) =>!prev)

  const reduxEstates = useSelector(store => store.estates)
  const dispatch = useDispatch()

  const handleUpdate = e => {
    const { id } = e.target
    let targetObject = { ...reduxEstates.estates.find(est => est._id === id) }
    setInfo({ id, ...targetObject })
    setVisiblePopup(true)
  }

  const handleDelete = async e => {
    const { id } = e.target
    const res = await deleteEstateAPI(id)

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
      <NavLink
        to={'/dashboard'}
        className='absolute left-2 top-3 bg-black text-white font-bold px-1 py-0.5 rounded'
      >
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
      {visiblePopup && (
        <div className='absolute top-0 right-0 left-0 backdrop-blur h-screen overflow-y-auto'>
          <div className='bg-black opacity-70'>
            <UpdatePopup
              info={info}
              setVisiblePopup={setVisiblePopup}
              setInfo={setInfo}
            />
          </div>
        </div>
      )}
      <div className="sticky bottom-0">
        <ErrorMessage text={"Try Again"} error={error} handleMessage={handleError} />
        <SuccessMessage text={"Post Deleted Successfully"} success={success} handleMessage={handleSuccess} />
      </div>
    </div>
  )
}

export default ViewListing
