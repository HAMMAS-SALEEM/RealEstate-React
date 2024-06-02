import React from 'react'

const Filters = () => {
  return (
    <div>
      <form className="flex flex-col m-4 gap-2">
        <input type='text' placeholder="Keyword" />
        <select name="City" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <input type='text' placeholder="Search by Category" />
        <input type='text' placeholder="Search by Bedrooms" />
        <input type='text' placeholder="Search by Bathrooms" />
        <input type="submit" value="Search" />
      </form>
    </div>
  )
}

export default Filters
