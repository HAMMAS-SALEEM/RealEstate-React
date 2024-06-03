import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

const Loader = () => {
  return (
    <RotatingLines
      strokeColor="#b4957c"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  )
}

export default Loader
