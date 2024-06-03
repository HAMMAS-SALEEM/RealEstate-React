import React from 'react'

const SuccessMessage = ({ text, success }) => {
  return (
    <>
      {success && (
        <div className='text-center bg-green-500 text-white text-xl font-bold'>
          {text}
        </div>
      )}
    </>
  )
}

export default SuccessMessage
