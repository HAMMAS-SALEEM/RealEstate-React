import React, { Suspense, lazy, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { handleAuth } from './redux/auth/auth'
import { useDispatch, useSelector } from 'react-redux'
import PublicRoute from './routes/PublicRoutes'
import ProtectedRoute from './routes/ProtectedRoutes'
import { cookieGetter } from './utils/cookieHandler'

const Home = lazy(() => import('./views/Home'))
const Detail = lazy(() => import('./views/Detail'))
const Dashboard = lazy(() => import('./views/Dashboard'))
const CreatePost = lazy(() => import('./views/CreatePost'))
const ViewListing = lazy(() => import('./views/ViewListing'))
const Login = lazy(() => import('./views/Login'))
const Register = lazy(() => import('./views/Register'))
const NotFound = lazy(() => import('./views/NotFound'))

const App = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector(store => store.auth)
  const token = cookieGetter();

  useEffect(() => {
    if (token && !user.signedIn) {
      dispatch(handleAuth())
      navigate('/')
    }
  }, [token, user.signedIn, dispatch, navigate])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<ProtectedRoute user={user.signedIn} />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<Detail />} />
          <Route path='/create_post' element={<CreatePost />} />
          <Route path='/view_listing' element={<ViewListing />} />
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
