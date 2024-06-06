import React from 'react'
import AppLayout from '../layout/AppLayout'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { formatNumberToCurrency } from '../utils/formatNumberToCurrency'
import bedroom from '../assets/bedroom.png'
import bathtub from '../assets/bathtub.png'
import location from '../assets/location.png'
import space from '../assets/space.png'

const Detail = () => {
  const estates = useSelector(store => store.estates.estates)

  const { id } = useParams()

  return (
    <div>
      {estates &&
        estates.map(estate => {
          if (estate._id === id) {
            return (
              <div className='estate-detail-card' key={estate._id}>
                <div className='estate-detail-image-container rounded-3xl overflow-hidden'>
                  <img
                    src={estate.image}
                    alt={estate.image}
                    className='estate-detail-image'
                  />
                </div>
                <div className='estate-detail-sub-container'>
                  <span className='text-green-500 font-bold text-lg'>
                    &#x2022; {estate.name} {estate.type}
                  </span>
                  <span className='text-4xl font-bold text-royal-black'>
                    {formatNumberToCurrency(estate.price, 'Rs.')}
                  </span>
                  <div className='flex items-center gap-6'>
                    <div className='flex justify-center items-center gap-3'>
                      <img className='w-7' src={bedroom} alt={bedroom} />
                      <span className='font-bold text-royal-black'>
                        {estate.bedrooms} Beds
                      </span>
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                      <img className='w-7' src={bathtub} alt={bathtub} />
                      <span className='font-bold text-royal-black'>
                        {estate.bathrooms} Baths
                      </span>
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                      <img className='w-7' src={space} alt={space} />
                      <span className='font-bold text-royal-black'>
                        {estate.propertySize}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src={location} alt={location} />
                    <span className='font-bold text-royal-black p-1 rounded'>
                      {(estate.address.street
                        ? `${estate.address.street}, `
                        : '') +
                        (estate.address.city
                          ? `${estate.address.city}, `
                          : '') +
                        (estate.address.state
                          ? `${estate.address.state}, `
                          : '') +
                        estate.address.country}
                    </span>
                  </div>
                  <span className='text-lg font-bold text-royal-black'>
                    Phone: {estate.phoneNumber}
                  </span>
                </div>
              </div>
            )
          }
          return null
        })}
    </div>
  )
}

export default AppLayout()(Detail)
