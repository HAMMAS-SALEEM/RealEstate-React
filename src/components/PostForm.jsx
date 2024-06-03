import React, { useEffect, useState } from 'react'
import { Country, State, City } from 'country-state-city'

const PostForm = ({ handleChange, handleSubmit, data }) => {
  const [countries, setCountries] = useState([])
  const [singleCountry, setSingleCountry] = useState()
  const [state, setState] = useState()
  const [singleState, setSingleState] = useState()
  const [stateData, setStateData] = useState()
  const [cities, setCities] = useState()
  const [cityData, setCitiesData] = useState()

  const getStatesOfCountry = country => {
    const country = State.getStatesOfCountry(countries.find(c => c.name === country)?.isoCode)
    setSingleCountry(country)
  }

  const getCitiesofState = state => {
    const state = City.getCitiesOfState(singleCountry?.isoCode, stateData.find(s => s.name === state)?.isoCode)
    setSingleState(state)
  }

  const handleCountries = async () => {
    let countryData = Country.getAllCountries()
    setCountries(countryData)
  }

  useEffect(() => {
    handleCountries()
  }, [])

  useEffect(() => {
    setStateData()
  }, [data.address.country])

  useEffect(() => {
    console.log('State Changed')
  }, [data.address.state])

  useEffect(() => {
    console.log('City Changed')
  }, [data.address.city])
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
      <label>Name:</label>
      <select
        required
        className='border py-1 indent-3'
        onChange={handleChange}
        name='name'
        value={data.name}
      >
        <option value='House'>House</option>
        <option value='House Upper Portion'>House Upper Portion</option>
        <option value='House Lower Portion'>House Lower Portion</option>
        <option value='Flat'>Flat</option>
        <option value='Villa'>Villa</option>
        <option value='Office Floor'>Office Floor</option>
        <option value='Building'>Building</option>
        <option value='Plot'>Plot</option>
      </select>
      <label>Price:</label>
      <input
        required
        className='border py-1 indent-3'
        onChange={handleChange}
        type='text'
        placeholder='Price'
        value={data.price}
        name='price'
      />
      <label>Property Area:</label>
      <input
        required
        className='border py-1 indent-3'
        onChange={handleChange}
        type='text'
        placeholder='Property Area'
        value={data.propertySize}
        name='propertySize'
      />
      <label>Street:</label>
      <input
        required
        className='border py-1 indent-3'
        onChange={handleChange}
        type='text'
        placeholder='Street'
        name='street'
        value={data.address.street}
      />
      <label>City:</label>
      <input
        required
        className='border py-1 indent-3'
        onChange={handleChange}
        type='text'
        placeholder='City'
        name='city'
        value={data.address.city}
      />
      <label>State:</label>
      <input
        required
        className='border py-1 indent-3'
        onChange={handleChange}
        type='text'
        placeholder='State'
        name='state'
        value={data.address.state}
      />
      <select
        required
        className='border py-1 indent-3'
        onChange={handleChange}
        name='state'
        value={data.address.state}
      >
        {countries.map(country => (
          <option key={country.name} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
      <label>Country:</label>
      {/* <input
        required
        className='border py-1 indent-3'
        onChange={handleChange}
        type='text'
        placeholder='Country'
        name='country'
        value={data.address.country}
      /> */}
      <select
        required
        className='border py-1 indent-3'
        onChange={handleChange}
        name='country'
        value={data.address.country}
      >
        {countries.map(country => (
          <option key={country.name} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
      <label>Image URL:</label>
      <input
        required
        className='border py-1 indent-3'
        onChange={handleChange}
        type='text'
        placeholder='Image'
        name='image'
        value={data.image}
      />
      <label>Type:</label>
      <select
        required
        className='border py-1 indent-3'
        onChange={handleChange}
        name='type'
        value={data.type}
      >
        <option value='For Sale'>For Sale</option>
        <option value='For Rent'>For Rent</option>
      </select>
      <label>Bedrooms:</label>
      <input
        required
        className='border py-1 indent-3'
        onChange={handleChange}
        type='text'
        placeholder='Bedrooms'
        name='bedrooms'
        value={data.bedrooms}
      />
      <label>Bathrooms:</label>
      <input
        required
        className='border py-1 indent-3'
        onChange={handleChange}
        type='text'
        placeholder='Bathrooms'
        name='bathrooms'
        value={data.bathrooms}
      />
      <label>Furnished:</label>
      <select
        required
        className='border py-1 indent-3'
        onChange={handleChange}
        name='furnished'
        value={data.furnished ? 'Yes' : 'No'}
      >
        <option value='Yes'>Yes</option>
        <option value='No'>No</option>
      </select>
      <label>Garage:</label>
      <select
        required
        className='border py-1 indent-3'
        onChange={handleChange}
        name='garage'
        value={data.garage ? 'Yes' : 'No'}
      >
        <option value='Yes'>Yes</option>
        <option value='No'>No</option>
      </select>
      <label>Swimming Pool:</label>
      <select
        required
        className='border py-1 indent-3'
        onChange={handleChange}
        name='swimmingPool'
        value={data.swimmingPool ? 'Yes' : 'No'}
      >
        <option value='Yes'>Yes</option>
        <option value='No'>No</option>
      </select>
      <label>Balcony:</label>
      <select
        required
        className='border py-1 indent-3'
        onChange={handleChange}
        name='balcony'
        value={data.balcony ? 'Yes' : 'No'}
      >
        <option value='Yes'>Yes</option>
        <option value='No'>No</option>
      </select>
      <label>Total Rooms:</label>
      <input
        required
        className='border py-1 indent-3'
        onChange={handleChange}
        type='text'
        placeholder='Total Rooms'
        value={data.rooms}
        name='rooms'
      />
      <label>Floors:</label>
      <input
        required
        className='border py-1 indent-3'
        onChange={handleChange}
        type='text'
        placeholder='Floors'
        value={data.floors}
        name='floors'
      />
      <label>Phone Number:</label>
      <input
        required
        className='border py-1 indent-3'
        onChange={handleChange}
        type='text'
        placeholder='Phone Number'
        value={data.phoneNumber}
        name='phoneNumber'
      />
      <button className='w-100 bg-black text-white py-1 rounded' type='submit'>
        Submit
      </button>
    </form>
  )
}

export default PostForm
