import React, { useState } from 'react'
import AppLayout from '../layout/AppLayout'
import { searchEstateAPI } from '../services/estates-service'
import { useDispatch, useSelector } from 'react-redux'
import { setSearch } from '../redux/search/search'
import SingleEstate from '../components/SingleEstate'
import Loader from '../components/Loader'
import { filterObjectByKey } from '../utils/objectHandler'

const Search = () => {
  const [loading, setLoading] = useState(false)
  const [initailMessage, setInitialMessage] = useState(true)
  const [noDataMessage, setNoDataMessage] = useState(false)
  const [searchParams, setSearchParams] = useState({})

  const dispatch = useDispatch()

  const handleSearchParams = e => {
    const { name, value } = e.target
    if (value && value !== 'All') {
      setSearchParams({...searchParams, [name]: value})
      console.log(searchParams)
      return value
    }

    console.log(searchParams)
    const filteredSearch = filterObjectByKey(name, searchParams)
    console.log(filteredSearch)
    setSearchParams(filteredSearch)
  }

  const searched = useSelector(state => state.search.search)

  const handleSubmit = async e => {
    e.preventDefault()
    console.log(searchParams)
    // const { value } = e.target[0]
    // if (value) {
    //   setNoDataMessage(false)
    //   setInitialMessage(false)
    //   setLoading(true)
    //   const res = await searchEstateAPI(value)
    //   setLoading(false)
    //   if (res.status === 201) {
    //     setNoDataMessage(true)
    //   }
    //   dispatch(setSearch(res.data.searched))
    // }
    return value
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='flex flex-wrap justify-center items-center p-5 gap-3'
      >
        <input
          type='text'
          placeholder='Keyword'
          className='border p-3 font-bold outline-none'
          required
        />
        <select
          onChange={handleSearchParams}
          name='type'
          className='border p-3 font-bold outline-none'
        >
          <option>All</option>
          <option>Rent</option>
          <option>Sale</option>
        </select>
        <input
          type='number'
          placeholder='Min Price'
          className='border p-3 font-bold outline-none'
          name="priceMin"
          onChange={handleSearchParams}
        />
        <input
          type='number'
          placeholder='Max Price'
          className='border p-3 font-bold outline-none'
          name="priceMax"
          onChange={handleSearchParams}
        />
        <button
          type='submit'
          className='w-30 border hover:bg-black bg-heading-color hover:text-white text-black font-bold p-3'
        >
          Search
        </button>
      </form>
      {loading && (
        <div className='flex justify-center items-center'>
          <Loader />
        </div>
      )}
      <ul className='flex flex-wrap justify-center items-center'>
        {searched &&
          !loading &&
          searched.map(estate => (
            <li key={estate._id}>
              <SingleEstate
                id={estate._id}
                name={estate.name}
                propertySize={estate.propertySize}
                price={estate.price}
                image={estate.image}
                bedrooms={estate.bedrooms}
                bathrooms={estate.bathrooms}
                address={estate.address}
                type={estate.type}
              />
            </li>
          ))}
      </ul>
      {(initailMessage || noDataMessage) && (
        <div className='flex flex-col justify-center items-center mt-20'>
          {initailMessage && (
            <span className='text-xl font-bold'>
              Search Your Desired Properties
            </span>
          )}
          {noDataMessage && (
            <span className='text-xl font-bold'>No Estate Found</span>
          )}
        </div>
      )}
    </>
  )
}

export default AppLayout()(Search)
