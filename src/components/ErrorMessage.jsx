import React from 'react'

const ErrorMessage = ({text, error}) => {
  return (
    <>
      {error && (
        <div className='text-center bg-red-500 text-white text-xl font-bold'>
          {text}
        </div>
      )}
    </>
  )
}

export default ErrorMessage
