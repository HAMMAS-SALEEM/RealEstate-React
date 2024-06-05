import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addEstates } from '../redux/estates/estates'
import { getApiEstates } from '../services/estates-service'

const GridLoader = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    getApiEstates()
      .then(estates => {
        dispatch(addEstates(estates.data.estates))
      })
      .catch(error => {
        return error
      })
  }, [])
  return <div>Loading...</div>
}

export default GridLoader
