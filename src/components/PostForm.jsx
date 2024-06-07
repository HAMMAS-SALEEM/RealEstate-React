import React, { useEffect, useRef, useState } from 'react'
import { Country, State, City } from 'country-state-city'
import formFields from '../fields/formField'
import estateValidation from '../validations/estateValidation'
import FieldError from './FieldError'

const PostForm = ({ handleChange, handleSubmit, setData, data }) => {
  const [locationData, setLocationData] = useState({
    countries: [],
    states: [],
    cities: [],
    singleCountry: {},
    singleState: {}
  })

  const [errors, setErrors] = useState({})

  const getSelectFieldValue = field => {
    if (['furnished', 'swimmingPool', 'garage', 'balcony'].includes(field)) {
      return data[field] ? 'Yes' : 'No'
    } else if (['country', 'state', 'city'].includes(field)) {
      return data.address[field]
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
        if (intervalRef.current === 1 && data.address.city) {
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

  const onSubmit = e => {
    e.preventDefault()
    const validationErrors = estateValidation(data)
    if (Object.keys(validationErrors).length === 0) {
      handleSubmit(e)
      setErrors({})
    } else {
      setErrors(validationErrors)
    }
  }

  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-3'>
      {formFields.map((field, index) => (
        <div key={index} className='flex flex-col'>
          <label className='text-heading-color font-bold'>{field.label}:</label>
          {field.type === 'select' ? (
            <select
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
              className='border py-1 indent-3'
              onChange={handleChange}
              type={field.type}
              placeholder={field.placeholder}
              name={field.name}
              value={data[field.name] || data.address[field.name] || ''}
            />
          )}
          {errors[field.name] && (
            <FieldError error={(errors[field.name]).toUpperCase()} />
          )}
          {errors[field.name] === undefined &&
            field.name.startsWith('address.') &&
            errors[field.name.split('.')[1]] && (
              <FieldError error={(errors[field.name.split('.')[1]]).toUpperCase()} />
              
            )}
        </div>
      ))}
      {
        data.uploadedIMG && <img src={data.uploadedIMG.secure_url || data.uploadedIMG} alt="uploadedImg" />
      }
      <input type="file" accept="image/" name="uploadedIMG" onChange={handleChange} />
      <button type="button" onClick={() => console.log(data)}>GetData</button>
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
