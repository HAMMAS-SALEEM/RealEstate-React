import React from 'react'
import AppLayout from '../layout/AppLayout'
import EstateList from '../components/EstateList'
import Intro from '../components/Intro'
import Filters from '../components/Filters'

const Home = () => {
  return (
    <div>
      <Intro />
      <Filters />
      <EstateList />
    </div>
  )
}

export default AppLayout()(Home)
