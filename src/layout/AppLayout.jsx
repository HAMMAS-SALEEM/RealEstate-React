import React from 'react'
import Header from '../components/Header'

const AppLayout = () => WrappedComponent => {
  return props => {
    return (
      <>
        <Header />
        <WrappedComponent {...props} />
      </>
    )
  }
}

export default AppLayout;
