import React from 'react'
import AppLayout from '../layout/AppLayout'
import ProductList from '../components/ProductList'
import Intro from '../components/Intro'

const Home = () => {

  return (
    <div>
      <Intro />
      <ProductList />
    </div>
  )
}

export default AppLayout()(Home);
