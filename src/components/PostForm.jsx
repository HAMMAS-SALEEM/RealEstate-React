import React, { useEffect, useRef, useState } from 'react'
import { Country, State, City } from 'country-state-city'

const PostForm = ({ handleChange, handleSubmit, setData, data }) => {
  const [locationData, setLocationData] = useState({
    countries: [],
    states: [],
    cities: [],
    singleCountry: {},
    singleState: {}
  })

  let intervalRef = useRef(1)

  useEffect(() => {
    const loadCountries = async () => {
      const countryData = Country.getAllCountries()
      // if (intervalRef.current === 0 && data.address.country.length > 0) {
        setData(prev => ({
          ...prev,
          address: { ...prev.address, country: countryData[0].name }
        }))
      // }
      setLocationData(prev => ({ ...prev, countries: countryData }))
    }
    intervalRef.current = intervalRef.current + 1
    loadCountries()
  }, [])

  useEffect(() => {
    if (data.address.country) {
      const fCountry = locationData.countries.find(
        c => c.name === data.address.country
      )
      if (fCountry) {
        const states = State.getStatesOfCountry(fCountry.isoCode)
        setData(prev => ({
          ...prev,
          address: {
            ...prev.address,
            state: states.length > 0 ? states[0].name : 'NA'
          }
        }))
        setLocationData(prev => ({
          ...prev,
          singleCountry: fCountry,
          states: states ? states : [],
          cities: []
        }))
        
      }
    }
  }, [data.address.country])

  useEffect(() => {
    if (data.address.state && locationData.singleCountry.isoCode) {
      const fState = locationData.states.find(
        s => s.name === data.address.state
      )
      if (fState) {
        const cities = City.getCitiesOfState(
          locationData.singleCountry.isoCode,
          fState.isoCode
        )
        setData(prev => ({
          ...prev,
          address: {
            ...prev.address,
            city: cities.length > 0 ? cities[0].name : 'NA'
          }
        }))
        setLocationData(prev => ({
          ...prev,
          singleState: fState,
          cities: cities ? cities : []
        }))
      } else {
        setData(prev => ({ ...prev, address: { ...prev.address, city: 'NA' } }))
      }
    }
  }, [data.address.state, locationData.states, locationData.singleCountry])

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
      <label className='text-heading-color font-bold'>Name:</label>
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
      <label className='text-heading-color font-bold'>Price:</label>
      <input
        required
        className='border py-1 indent-3'
        onChange={handleChange}
        type='text'
        placeholder='Price'
        value={data.price}
        name='price'
      />
      <label className='text-heading-color font-bold'>Property Area:</label>
      <input
        required
        className='border py-1 indent-3'
        onChange={handleChange}
        type='text'
        placeholder='Property Area'
        value={data.propertySize}
        name='propertySize'
      />
      <label className='text-heading-color font-bold'>Street:</label>
      <input
        required
        className='border py-1 indent-3'
        onChange={handleChange}
        type='text'
        placeholder='Street'
        name='street'
        value={data.address.street}
      />
      <label className='text-heading-color font-bold'>City:</label>
      <select
        required
        className='border py-1 indent-3'
        onChange={handleChange}
        name='city'
        value={data.address.city}
      >

        {locationData.cities && <option value='NA'>NA</option>}
        {locationData.cities.map(city => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
      <label className='text-heading-color font-bold'>State:</label>
      <select
        required
        className='border py-1 indent-3'
        onChange={handleChange}
        name='state'
        value={data.address.state}
      >
        {locationData.states && <option value='NA'>NA</option>}
        {locationData.states.map(state => (
          <option key={state.name} value={state.name}>
            {state.name}
          </option>
        ))}
      </select>
      <label className='text-heading-color font-bold'>Country:</label>
      <select
        required
        className='border py-1 indent-3'
        onChange={handleChange}
        name='country'
        value={data.address.country}
      >
        {locationData.countries.map(country => (
          <option key={country.name} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
      <label className='text-heading-color font-bold'>Image URL:</label>
      <input
        required
        className='border py-1 indent-3'
        onChange={handleChange}
        type='text'
        placeholder='Image'
        name='image'
        value={data.image}
      />
      <label className='text-heading-color font-bold'>Type:</label>
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
      <label className='text-heading-color font-bold'>Bedrooms:</label>
      <input
        required
        className='border py-1 indent-3'
        onChange={handleChange}
        type='text'
        placeholder='Bedrooms'
        name='bedrooms'
        value={data.bedrooms}
      />
      <label className='text-heading-color font-bold'>Bathrooms:</label>
      <input
        required
        className='border py-1 indent-3'
        onChange={handleChange}
        type='text'
        placeholder='Bathrooms'
        name='bathrooms'
        value={data.bathrooms}
      />
      <label className='text-heading-color font-bold'>Furnished:</label>
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
      <label className='text-heading-color font-bold'>Garage:</label>
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
      <label className='text-heading-color font-bold'>Swimming Pool:</label>
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
      <label className='text-heading-color font-bold'>Balcony:</label>
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
      <label className='text-heading-color font-bold'>Total Rooms:</label>
      <input
        required
        className='border py-1 indent-3'
        onChange={handleChange}
        type='text'
        placeholder='Total Rooms'
        value={data.rooms}
        name='rooms'
      />
      <label className='text-heading-color font-bold'>Floors:</label>
      <input
        required
        className='border py-1 indent-3'
        onChange={handleChange}
        type='text'
        placeholder='Floors'
        value={data.floors}
        name='floors'
      />
      <label className='text-heading-color font-bold'>Phone Number:</label>
      <input
        required
        className='border py-1 indent-3'
        onChange={handleChange}
        type='text'
        placeholder='Phone Number'
        value={data.phoneNumber}
        name='phoneNumber'
      />
      <button
        className='w-100 mt-3 bg-heading-color hover:bg-black text-white py-1 rounded font-bold'
        type='submit'
      >
        Submit
      </button>
    </form>
  )
}

export default PostForm
