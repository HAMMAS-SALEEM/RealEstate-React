import React from 'react'

const SuccessPopup = ({ text, success, handlePopup }) => {
  return (
    <>
      {success && (
        <div>
          <h3>{text}</h3>
        </div>
      )}
    </>
  )
}

export default SuccessPopup
