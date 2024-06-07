import React from 'react'
import { formatNumberToCurrency } from '../utils/formatNumberToCurrency'
import location from '../assets/location.png'
import bedroom from '../assets/bedroom.png'
import bathtub from '../assets/bathtub.png'
import space from '../assets/space.png'
import { NavLink } from 'react-router-dom'

const SingleEstate = ({
  id,
  name,
  propertySize,
  price,
  image,
  bedrooms,
  bathrooms,
  address,
  type,
  uploadedIMG
}) => {
  const formatPrice = formatNumberToCurrency(price, 'Rs.')
  return (
    <NavLink to={`/estate/${id}`}>
      <div className='estate-card'>
        <img src={uploadedIMG.url || image} alt={name} className='estate-image' />
        <h3 className='estate-title'>{name}</h3>
        <div className='flex items-center gap-1 ml-3'>
          <img src={location} alt='location' className='estate-icon' />
          <p className='estate-address'>
            {address.street + ', ' + address.city}
          </p>
        </div>
        <div className='flex items-center gap-2 ml-3 mt-6'>
          <img
            src={bedroom}
            alt='bedroom'
            className='estate-icon estate-icon-bedroom'
          />
          <p className='estate-description mr-5'>{bedrooms}</p>
          <img src={bathtub} alt='bathtub' className='estate-icon' />
          <p className='estate-description mr-5'>{bathrooms}</p>
          <img src={space} alt='space' className='estate-icon' />
          <p className='estate-description'>{propertySize}</p>
        </div>
        <span className='estate-price'>{formatPrice}</span>
        <span className='estate-type'>{type}</span>
      </div>
    </NavLink>
  )
}

export default SingleEstate
