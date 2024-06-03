import React, { useState } from 'react'
import { authMethods } from '../services/auth-service'
import { useDispatch } from 'react-redux'
import { handleAuth } from '../redux/auth/auth'
import AuthForm from '../components/AuthForm'
import { NavLink } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const dispatch = useDispatch()

  const handleSignin = async e => {
    e.preventDefault()
    const res = await authMethods.signin(email, password)
    if (res.status === 200) {
      setError('')
      dispatch(handleAuth())
      return
    } else {
      setError(res.response.data.message)
    }
  }

  const title = 'Login'
  const desc = 'Please login to your account'

  const fields = [
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      value: email,
      required: true
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      value: password,
      required: true
    }
  ]

  const setFieldValue = (fieldName, value) => {
    if (fieldName === 'email') setEmail(value)
    if (fieldName === 'password') setPassword(value)
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <AuthForm
        handleAuth={handleSignin}
        setFieldValue={setFieldValue}
        title={title}
        desc={desc}
        error={error}
        fields={fields}
      />
      <NavLink to='/register'>Don't have an account?</NavLink>
    </div>
  )
}

export default Login
