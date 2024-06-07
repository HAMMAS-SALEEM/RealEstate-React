import React, { useState } from 'react'
import PostForm from './PostForm'
import { updateEstateAPI } from '../services/estates-service'
import { updateEstate } from '../redux/estates/estates'
import { useDispatch } from 'react-redux'

const UpdatePopup = ({
  info,
  setVisiblePopup,
  setInfo,
  setUpdateSuccess,
  handleLoading,
  setError,
  setErrorText,
}) => {
  const [data, setData] = useState(info)

  const dispatch = useDispatch()

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
      const file = TransformFile(e.target.files[0])
      setData({ ...data, uploadedIMG: file })
    } else {
      const { name, value } = e.target

      if (['balcony', 'swimmingPool', 'furnished', 'garage'].includes(name)) {
        setData({ ...data, [name]: value === 'Yes' })
      } else if (
        ['bedrooms', 'bathrooms', 'price, floors, rooms'].includes(name)
      ) {
        console.log(name, value)
        setData({ ...data, [name]: Number(value) })
      } else if (['street', 'city', 'state', 'country'].includes(name)) {
        setData({ ...data, address: { ...data.address, [name]: value } })
      } else {
        setData({ ...data, [name]: value })
      }
    }
  }

  const handleVisibilityPopup = () => {
    setVisiblePopup(false)
    setInfo({})
  }

  const handleSubmit = async e => {
    e.preventDefault()
    handleVisibilityPopup()
    handleLoading()
    const res = await updateEstateAPI(data)
    if (res.status === 200) {
      data.uploadedIMG = res.data.uploadRes
      dispatch(updateEstate(data))
      handleLoading()
      setUpdateSuccess(true)
      setError(false)
    } else if(res.response.status === 413) {
      setUpdateSuccess(false)
      handleVisibilityPopup()
      setError(true)
      handleLoading()
      setErrorText("File is too large")
    }else {
      setUpdateSuccess(false)
      handleVisibilityPopup()
      setError(true)
      handleLoading()
    }
  }

  return (
    <>
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
            setData={setData}
            data={data}
          />
        }
      </div>
    </>
  )
}

export default UpdatePopup
