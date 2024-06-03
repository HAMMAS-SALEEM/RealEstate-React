import React from 'react'

const SuccessPopup = ({ text, success, handlePopup }) => {
  return (
    <>
      {success && (
        <div className='bg-green-500 text-white fixed top-0 left-0 right-0'>
          <button type='button' className="absolute top-2 right-2 text-xl font-bold bg-black px-2 py-1 rounded" onClick={handlePopup}>
            X
          </button>
          <div className="text-center font-bold py-4">
            <h3>{text}</h3>
          </div>
        </div>
      )}
    </>
  )
}

export default SuccessPopup
