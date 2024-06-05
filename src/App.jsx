import React, { Suspense, lazy, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import { handleAuth } from './redux/auth/auth'
import { useDispatch, useSelector } from 'react-redux'
import PublicRoute from './routes/PublicRoutes'
import ProtectedRoute from './routes/ProtectedRoutes'
import { cookieGetter } from './utils/cookieHandler'
import GridLoader from './views/GridLoader'

const Home = lazy(() => import('./views/Home'))
const Detail = lazy(() => import('./views/Detail'))
const Dashboard = lazy(() => import('./views/Dashboard'))
const CreatePost = lazy(() => import('./views/CreatePost'))
const ViewListing = lazy(() => import('./views/ViewListing'))
const Search = lazy(() => import('./views/Search'))
const Login = lazy(() => import('./views/Login'))
const Register = lazy(() => import('./views/Register'))
const NotFound = lazy(() => import('./views/NotFound'))

const App = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector(store => store.auth)
  const token = cookieGetter();
  
  const location = useLocation()

  useEffect(() => {
    if (token && !user.signedIn) {
      dispatch(handleAuth())
      navigate(location.pathname)
    }
  }, [token, user.signedIn, dispatch, navigate])

  return (
    <Suspense fallback={<GridLoader />}>
      <Routes>
        <Route element={<ProtectedRoute user={user.signedIn} />}>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/estate/:id' element={<Detail />} />
          <Route path='/create_post' element={<CreatePost />} />
          <Route path='/view_listing' element={<ViewListing />} />
          <Route path='/search' element={<Search />} />
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
