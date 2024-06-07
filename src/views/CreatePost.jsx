import React, { useState } from 'react'
import PostForm from '../components/PostForm'
import { postEstateAPI } from '../services/estates-service'
import { createEstate } from '../redux/estates/estates'
import { useDispatch } from 'react-redux'
import SuccessMessage from '../components/SuccessMessage'
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'
import AppLayout from '../layout/AppLayout'
import initialState from '../initialStates/createInitial'

const CreatePost = () => {
  const [data, setData] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const dispatch = useDispatch()

  const handleSuccess = () => setSuccess(prev => !prev)
  const handleError = () => setError(prev => !prev)

  const TransformFile = (file) => {
    const reader = new FileReader();
    if(file) {
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setData({ ...data, uploadedIMG: reader.result})
      }
    } else {
      setData({ ...data, uploadedIMG: ''})
    }
  }

  const handleChange = e => {
    if (e.target.name === 'uploadedIMG') {
      TransformFile(e.target.files[0])
    } else {
      const { name, value } = e.target

      if (['balcony', 'swimmingPool', 'furnished', 'garage'].includes(name)) {
        setData({ ...data, [name]: value === 'Yes' })
      } else if (
        ['bedrooms', 'bathrooms', 'price, floors, rooms'].includes(name)
      ) {
        setData({ ...data, [name]: Number(value) })
      } else if (['street', 'city', 'state', 'country'].includes(name)) {
        setData({ ...data, address: { ...data.address, [name]: value } })
      } else {
        setData({ ...data, [name]: value })
      }
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    console.log("Working.....")
    setLoading(true)
    const res = await postEstateAPI(data)
    if (res.status === 200) {
      dispatch(createEstate(res.data.estate))
      setSuccess(true)
      setLoading(false)
      setData(initialState)
    } else {
      setError(true)
      setLoading(false)
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
        setData={setData}
        data={data}
      />
      <div className='fixed top-0 left-0 right-0'>
        <SuccessMessage
          text={'Post Created Successfully'}
          success={success}
          handleMessage={handleSuccess}
        />
        <ErrorMessage
          text={'Try Again'}
          error={error}
          handleMessage={handleError}
        />
      </div>
      {loading && (
        <div className='bg-black fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center'>
          <Loader />
        </div>
      )}
    </div>
  )
}

export default AppLayout()(CreatePost)
