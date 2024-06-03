import React, { useState } from 'react'
import PostForm from './PostForm'
import { updateEstateAPI } from '../services/estates-service'
import { updateEstate } from '../redux/estates/estates'
import { useDispatch } from 'react-redux'
import SuccessMessage from './SuccessMessage'
import ErrorMessage from './ErrorMessage'

const UpdatePopup = ({ info, setVisiblePopup, setInfo, handleUpdateSuccess }) => {
  const [data, setData] = useState(info)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')

  const dispatch = useDispatch()

  const handleSuccess = () => setSuccess((prev) => !prev)

  const handleError = () => setError((prev) =>!prev)

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

  const handleVisibilityPopup = () => {
    setVisiblePopup(false)
    setInfo({})
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const res = await updateEstateAPI(data)
    if (res.status === 200) {
      dispatch(updateEstate(data))
      setSuccess(true)
      handleUpdateSuccess();
      handleVisibilityPopup()
    } else {
      setError(true)
      setMessage(res.message)
    }
  }

  return (
    <div className='p-4'>
      <button
        type='="button'
        onClick={handleVisibilityPopup}
        className='font-bold text-xl text-white'
      >
        X
      </button>
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
      <div className="sticky">
        <ErrorMessage error={error} text={message} handleMessage={handleError} />
        <SuccessMessage success={success} text={message} handleMessage={handleSuccess} />
      </div>
    </div>
  )
}

export default UpdatePopup
