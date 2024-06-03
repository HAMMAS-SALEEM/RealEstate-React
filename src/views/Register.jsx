import React, { useState } from 'react'
import { authMethods } from '../services/auth-service'
import AuthForm from '../components/AuthForm'
import { useDispatch } from 'react-redux'
import { handleAuth } from '../redux/auth/auth'
import { NavLink } from 'react-router-dom'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const dispatch = useDispatch()

  const handleSignup = async e => {
    e.preventDefault()
    const res = await authMethods.signup(username, email, password)
    if (res.status === 200) {
      dispatch(handleAuth())
      setError('')
    } else {
      setError(res.response.data.message)
    }
  }

  const title = "Register"
  const desc = 'Create a new account!'

  const fields = [
    { name: 'username', label: 'Username', type: 'text', value: username, required: true },
    { name: 'email', label: 'Email', type: 'text', value: email, required: true },
    { name: 'password', label: 'Password', type: 'password', value: password, required: true }
  ]

  const setFieldValue = (fieldName, value) => {
    if (fieldName === 'username') setUsername(value)
    if (fieldName === 'email') setEmail(value)
    if (fieldName === 'password') setPassword(value)
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <AuthForm
        handleAuth={handleSignup}
        setFieldValue={setFieldValue}
        title={title}
        desc={desc}
        error={error}
        fields={fields}
      />
      <NavLink to='/login'>Already have account?</NavLink>
    </div>
  )
}

export default Register
