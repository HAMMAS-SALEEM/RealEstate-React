import React from 'react'
import AppLayout from '../layout/AppLayout'
import ProductList from '../components/ProductList'

const Home = () => {

  return (
    <div>
      <ProductList />
    </div>
  )
}

export default AppLayout()(Home);
