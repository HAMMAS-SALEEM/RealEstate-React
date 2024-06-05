const formFields = [
    { label: 'Name', type: 'select', name: 'name', options: ['House', 'House Upper Portion', 'House Lower Portion', 'Flat', 'Villa', 'Office Floor', 'Building', 'Plot'] },
    { label: 'Price', type: 'text', name: 'price', placeholder: 'Price' },
    { label: 'Property Area', type: 'text', name: 'propertySize', placeholder: 'Property Area' },
    { label: 'Street', type: 'text', name: 'street', placeholder: 'Street' },
    { label: 'City', type: 'select', name: 'city', options: [] },
    { label: 'State', type: 'select', name: 'state', options: [] },
    { label: 'Country', type: 'select', name: 'country', options: [] },
    { label: 'Image URL', type: 'text', name: 'image', placeholder: 'Image' },
    { label: 'Type', type: 'select', name: 'type', options: ['For Sale', 'For Rent'] },
    { label: 'Bedrooms', type: 'text', name: 'bedrooms', placeholder: 'Bedrooms' },
    { label: 'Bathrooms', type: 'text', name: 'bathrooms', placeholder: 'Bathrooms' },
    { label: 'Furnished', type: 'select', name: 'furnished', options: ['Yes', 'No'] },
    { label: 'Garage', type: 'select', name: 'garage', options: ['Yes', 'No'] },
    { label: 'Swimming Pool', type: 'select', name: 'swimmingPool', options: ['Yes', 'No'] },
    { label: 'Balcony', type: 'select', name: 'balcony', options: ['Yes', 'No'] },
    { label: 'Total Rooms', type: 'text', name: 'rooms', placeholder: 'Total Rooms' },
    { label: 'Floors', type: 'text', name: 'floors', placeholder: 'Floors' },
    { label: 'Phone Number', type: 'text', name: 'phoneNumber', placeholder: 'Phone Number' }
  ]
  
  export default formFields