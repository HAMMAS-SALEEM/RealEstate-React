import React from 'react'

const ErrorPopup = ({ errors }) => {
  const arr = Object.values(errors)

  return (
    <ul className="bg-red-500 p-2 m-5">
      {arr && arr.map((error, index) => {
        return <li className="text-white font-bold" key={error + index}>- {error}</li>
      })}
    </ul>
  )
}

export default ErrorPopup
