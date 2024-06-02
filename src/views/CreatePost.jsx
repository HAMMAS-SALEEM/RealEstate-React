import React, { useState } from 'react'
import PostForm from '../components/PostForm'
import { postEstateAPI } from '../services/estates-service'
import { createEstate } from '../redux/estates/estates'
import { useDispatch } from 'react-redux'

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
  const [errors, setErrors] = useState(false)

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target
    if(name === 'balcony' || name === 'swimming pool' || name === 'furnished' || name === 'garage'){
      if(value === 'Yes') {
        setData({...data, [name]: true })
        return value
      } else if(value === 'No') {
        setData({...data, [name]: false })
        return value
      }
    } else if(name === 'bedrooms' || name === 'bathrooms' || name === 'price') {
      setData({...data, [name]: Number(value) })
        return value
    }
    else if(name === 'street' || name === 'city' || name === 'state' || name === 'country') {
      setData({...data, address: {...data.address, [name]: value} })
        return value
    }
    setData({ ...data, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    console.log(data)
    const res = await postEstateAPI(data)
    if(res.status === 200) {
      dispatch(createEstate(res.data))
      setSuccess(true)
    } else {
      setErrors(true)
    }
  }
  return (
    <div className="p-4">
      <h1 className="text-center my-5 text-3xl font-bold text-heading-color">Create Post</h1>
      <PostForm handleChange={handleChange} handleSubmit={handleSubmit} />
      {
        success && <div className="text-center text-green-500 text-2xl font-bold">Post Created Successfully</div>
      }
      {
        errors && <div className="text-center text-red-500 text-2xl font-bold">Something went wrong</div>
      }
    </div>
  )
}

export default CreatePost
