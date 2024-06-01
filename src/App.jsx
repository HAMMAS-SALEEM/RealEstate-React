import React, { Suspense, lazy, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { handleAuth } from './redux/auth/auth'
import { useDispatch, useSelector } from 'react-redux'
import PublicRoute from './routes/PublicRoutes'
import ProtectedRoute from './routes/ProtectedRoutes'

const Home = lazy(() => import('./views/Home'))
const Detail = lazy(() => import('./views/Detail'))
const Cart = lazy(() => import('./views/Cart'))
const Checkout = lazy(() => import('./views/Checkout'))
const Login = lazy(() => import('./views/Login'))
const Register = lazy(() => import('./views/Register'))
const NotFound = lazy(() => import('./views/NotFound'))

const App = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector(store => store.auth)
  const token = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    if (token) {
      dispatch(handleAuth())
      navigate('/')
    }
  }, [])
  return (
    <Suspense>
      <Routes>
        <Route element={<ProtectedRoute user={user.signedIn} />}>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<Detail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Route>
        <Route element={<PublicRoute user={user.signedIn} />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default App
