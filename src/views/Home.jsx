import React from 'react'
import AppLayout from '../layout/AppLayout'
import EstateList from '../components/EstateList'
import Intro from '../components/Intro'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Intro />
      <EstateList />
      <Footer />
    </div>
  )
}

export default AppLayout()(Home)
