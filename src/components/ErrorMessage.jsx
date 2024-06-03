import React from 'react'

const ErrorMessage = ({ text, error, handleMessage }) => {
  return (
    <>
      {error && (
        <div className='text-center bg-red-500 text-white text-xl font-bold py-2'>
          <div>{text}</div>
          <button
            type='button'
            className='absolute top-2 right-2 bg-black px-1'
            onClick={handleMessage}
          >
            X
          </button>
        </div>
      )}
    </>
  )
}

export default ErrorMessage
