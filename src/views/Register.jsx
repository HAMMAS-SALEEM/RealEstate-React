import React, { useState } from 'react'
import { authMethods } from '../services/auth-service'
import AuthForm from '../components/AuthForm'
import { useDispatch } from 'react-redux'
import { handleAuth } from '../redux/auth/auth'
import { NavLink } from 'react-router-dom'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const dispatch = useDispatch()

  const handleSignup = async e => {
    e.preventDefault()
    const res = await authMethods.signup(email, password)
    if (res[0] === 'auth/email-already-in-use') {
      setError('Email already in use')
    } else {
      dispatch(handleAuth())
      setError('')
    }
  }

  const title = "Register"
  const desc = 'Create a new account!'

  return (
    <div className="flex flex-col justify-center items-center">
      <AuthForm
        handleAuth={handleSignup}
        setEmail={setEmail}
        setPassword={setPassword}
        title={title}
        desc={desc}
        error={error}
      />
      <NavLink to='/login'>Already have account?</NavLink>
    </div>
  )
}

export default Register
