import React, { useState } from 'react'
import { authMethods } from '../services/auth-service'
import AuthForm from '../components/AuthForm'
import { useDispatch } from 'react-redux'
import { handleAuth } from '../redux/auth/auth'
import { NavLink } from 'react-router-dom'
import AppLayout from '../layout/AppLayout'
import authValidation from '../validations/authValidation'
import ErrorPopup from '../components/ErrorPopup'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [errorMsgs, setErrorMsgs] = useState({})

  const dispatch = useDispatch()

  const handleSignup = async e => {
    e.preventDefault()
    setError('')
    setErrorMsgs({})
    const errors = authValidation({ username, email, password })
    if (Object.keys(errors).length === 0) {
      const res = await authMethods.signup(username, email, password)
      if (res.status === 200) {
        dispatch(handleAuth())
        setError('')
      } else {
        setError(res.response.data.message)
      }
    } else {
      setErrorMsgs(errors)
    }
  }

  const title = 'Register'
  const desc = 'Create a new account!'

  const fields = [
    {
      name: 'username',
      label: 'Username',
      type: 'text',
      value: username,
      required: false
    },
    {
      name: 'email',
      label: 'Email',
      type: 'text',
      value: email,
      required: false
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      value: password,
      required: false
    }
  ]

  const setFieldValue = (fieldName, value) => {
    if (fieldName === 'username') setUsername(value)
    if (fieldName === 'email') setEmail(value)
    if (fieldName === 'password') setPassword(value)
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <AuthForm
        handleAuth={handleSignup}
        setFieldValue={setFieldValue}
        title={title}
        desc={desc}
        error={error}
        fields={fields}
      />
      <NavLink to='/login'>Already have account?</NavLink>
      <div>
        {
          Object.values(errorMsgs).length > 0 && <ErrorPopup errors={errorMsgs} />
        }
      </div>
    </div>
  )
}

export default AppLayout()(Register)
