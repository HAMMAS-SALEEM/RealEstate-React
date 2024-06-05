import React from 'react'
import AppLayout from '../layout/AppLayout'
import EstateList from '../components/EstateList'
import Intro from '../components/Intro'

const Home = () => {
  return (
    <div>
      <Intro />
      <EstateList />
    </div>
  )
}

export default AppLayout()(Home)
