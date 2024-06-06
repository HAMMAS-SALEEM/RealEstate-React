import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addEstates } from '../redux/estates/estates'
import { getApiEstates } from '../services/estates-service'
import Loader from '../components/Loader'

const GridLoader = () => {
  const estates = useSelector(state => state.estates.estates)
  const dispatch = useDispatch()
  useEffect(() => {
    if (estates.length === 0) {
      getApiEstates()
        .then(estates => {
          dispatch(addEstates(estates.data.estates))
        })
        .catch(error => {
          return error
        })
    }
  }, [])
  return (
    <div className='flex justify-center m-56'>
      <Loader />
    </div>
  )
}

export default GridLoader
