import React from 'react'

const ErrorPopup = ({ text, error, handlePopup }) => {
  return (
    <>
      {error && (
        <div>
          <h3>{text}</h3>
        </div>
      )}
    </>
  )
}

export default ErrorPopup
