import React from 'react'

const Filters = () => {
  return (
    <div>
      <form className="flex flex-col m-4 gap-2">
        <select name="type" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>For Rent</option>
          <option>For Sale</option>
        </select>
        <input type='text' placeholder="Search by Category" />
        <input type='text' placeholder="Search by Min Price" />
        <input type='text' placeholder="Search by Max Price" />
        <input type="submit" value="Search" />
      </form>
    </div>
  )
}

export default Filters
