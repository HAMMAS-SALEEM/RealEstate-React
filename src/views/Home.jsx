import React from 'react'
import AppLayout from '../layout/AppLayout'
import ProductList from '../components/ProductList'
import Intro from '../components/Intro'
import Filters from '../components/Filters'

const Home = () => {
  return (
    <div>
      <Intro />
      <Filters />
      <ProductList />
    </div>
  )
}

export default AppLayout()(Home)
