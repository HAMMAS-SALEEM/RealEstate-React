import React, { useState } from 'react'
import PostForm from './PostForm'
import { updateEstateAPI } from '../services/estates-service'
import { updateEstate } from '../redux/estates/estates'

const UpdatePopup = ({info, setVisiblePopup, setInfo}) => {
  const [data, setData] = useState(info)
  const [success, setSuccess] = useState(false)
  const [error, setErrors] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target

    if (['balcony', 'swimmingPool', 'furnished', 'garage'].includes(name)) {
      setData({ ...data, [name]: value === 'Yes' })
    } else if (['bedrooms', 'bathrooms', 'price'].includes(name)) {
      setData({ ...data, [name]: Number(value) })
    } else if (['street', 'city', 'state', 'country'].includes(name)) {
      setData({ ...data, address: { ...data.address, [name]: value } })
    } else {
      setData({ ...data, [name]: value })
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const res = await updateEstateAPI(data)
    if (res.status === 200) {
      dispatch(updateEstate(res.data.estate))
      setSuccess(true)
      setVisiblePopup(false)
      setInfo({})
    } else {
      setErrors(true)
    }
  }

  return (
    <div className='p-4'>
      <button type='="button' onClick={() => setVisiblePopup(false)} className="font-bold text-xl text-white">X</button>
      <h1 className='text-center my-5 text-3xl font-bold text-heading-color'>
        Update Post
      </h1>
      {
        <PostForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          data={data}
        />
      }
      {success && (
        <div className='text-center text-green-500 text-2xl font-bold'>
          Post Created Successfully
        </div>
      )}
      {error && (
        <div className='text-center text-red-500 text-2xl font-bold'>
          Something went wrong
        </div>
      )}
    </div>
  )
}

export default UpdatePopup
