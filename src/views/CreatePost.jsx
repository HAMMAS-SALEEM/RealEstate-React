import React, { useState } from 'react'
import PostForm from '../components/PostForm'
import { postEstateAPI } from '../services/estates-service'
import { createEstate } from '../redux/estates/estates'
import { useDispatch } from 'react-redux'
import SuccessMessage from '../components/SuccessMessage'
import ErrorMessage from '../components/ErrorMessage'

const CreatePost = () => {
  const [data, setData] = useState({
    name: '',
    price: '',
    propertySize: '',
    address: {
      street: '',
      city: '',
      state: '',
      country: ''
    },
    image: '',
    type: '',
    bedrooms: '',
    bathrooms: '',
    furnished: false,
    garage: false,
    swimmingPool: false,
    balcony: false
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setErrors] = useState(false)

  const dispatch = useDispatch()

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
    console.log(data)
    const res = await postEstateAPI(data)
    if (res.status === 200) {
      dispatch(createEstate(res.data.estate))
      setSuccess(true)
    } else {
      setErrors(true)
    }
  }
  return (
    <div className='p-4'>
      <h1 className='text-center my-5 text-3xl font-bold text-heading-color'>
        Create Post
      </h1>
      <PostForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        data={data}
      />
      <SuccessMessage text={"Post Created Successfully"} success={success} />
      <ErrorMessage text={"Try Again"} error={error} />
    </div>
  )
}

export default CreatePost
