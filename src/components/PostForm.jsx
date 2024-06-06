import React, { useEffect, useRef, useState } from 'react'
import { Country, State, City } from 'country-state-city'
import formFields from '../fields/formField'

const PostForm = ({ handleChange, handleSubmit, setData, data }) => {
  const [locationData, setLocationData] = useState({
    countries: [],
    states: [],
    cities: [],
    singleCountry: {},
    singleState: {}
  })

  const getSelectFieldValue = (field) => {
    if(["furnished", "swimmingPool", "garage", 'balcony'].includes(field)) {
      return data[field] ? 'Yes' : 'No'
    } else if(["country", "state", "city"].includes(field)) {
      data.address[field]
    }
    return data[field] || data.address[field] || ''
  }

  let intervalRef = useRef(1)

  useEffect(() => {
    const loadCountries = async () => {
      const countryData = Country.getAllCountries()
      if (intervalRef.current === 1 && data.address.country) {
        setData(prev => ({
          ...prev,
          address: { ...prev.address, country: data.address.country }
        }))
      } else {
        setData(prev => ({
          ...prev,
          address: { ...prev.address, country: countryData[0].name }
        }))
      }
      setLocationData(prev => ({ ...prev, countries: countryData }))
    }
    loadCountries()
  }, [])

  useEffect(() => {
    if (data.address.country) {
      const fCountry = locationData.countries.find(
        c => c.name === data.address.country
      )
      if (fCountry) {
        const states = State.getStatesOfCountry(fCountry.isoCode)
        if (intervalRef.current === 1 && data.address.state) {
          setData(prev => ({
            ...prev,
            address: {
              ...prev.address,
              state: data.address.state
            }
          }))
        } else {
          setData(prev => ({
            ...prev,
            address: {
              ...prev.address,
              state: states.length > 0 ? states[0].name : 'NA'
            }
          }))
        }
        setLocationData(prev => ({
          ...prev,
          singleCountry: fCountry,
          states: states.length > 0 ? states : [{ name: 'NA' }],
          cities: []
        }))
      }
    }
  }, [data.address.country, locationData.countries, setData])

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
        if(intervalRef.current === 1 && data.address.city) {
          setData(prev => ({
            ...prev,
            address: {
              ...prev.address,
              city: data.address.city
            }
          }))
        } else {
          setData(prev => ({
            ...prev,
            address: {
              ...prev.address,
              city: cities.length > 0 ? cities[0].name : 'NA'
            }
          }))
        }
        setLocationData(prev => ({
          ...prev,
          singleState: fState,
          cities: cities.length > 0 ? cities : [{ name: 'NA' }]
        }))
      } else {
        setData(prev => ({ ...prev, address: { ...prev.address, city: 'NA' } }))
      }
      intervalRef.current = intervalRef.current + 1
    }
  }, [
    data.address.state,
    locationData.states,
    locationData.singleCountry,
    setData
  ])

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
      {formFields.map((field, index) => (
        <div key={index} className='flex flex-col'>
          <label className='text-heading-color font-bold'>{field.label}:</label>
          {field.type === 'select' ? (
            <select
              required
              className='border py-1 indent-3'
              onChange={handleChange}
              name={field.name}
              value={getSelectFieldValue(field.name)}
            >
              {(field.name === 'city'
                ? locationData.cities
                : field.name === 'state'
                ? locationData.states
                : field.name === 'country'
                ? locationData.countries
                : field.options
              ).map(option => (
                <option
                  key={option.name || option}
                  value={option.name || option}
                >
                  {option.name || option}
                </option>
              ))}
            </select>
          ) : (
            <input
              required
              className='border py-1 indent-3'
              onChange={handleChange}
              type={field.type}
              placeholder={field.placeholder}
              name={field.name}
              value={data[field.name] || data.address[field.name] || ''}
            />
          )}
        </div>
      ))}
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
