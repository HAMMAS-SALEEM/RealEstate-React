const formFields = [
    { label: 'Name', type: 'select', name: 'name', options: ['House', 'House Upper Portion', 'House Lower Portion', 'Flat', 'Villa', 'Office Floor', 'Building', 'Plot'] },
    { label: 'Price', type: 'number', name: 'price', placeholder: 'Price' },
    { label: 'Property Area', type: 'text', name: 'propertySize', placeholder: 'Property Area' },
    { label: 'Country', type: 'select', name: 'country', options: [] },
    { label: 'State', type: 'select', name: 'state', options: [] },
    { label: 'City', type: 'select', name: 'city', options: [] },
    { label: 'Street', type: 'text', name: 'street', placeholder: 'Street' },
    { label: 'Type', type: 'select', name: 'type', options: ['For Sale', 'For Rent'] },
    { label: 'Bedrooms', type: 'number', name: 'bedrooms', placeholder: 'Bedrooms' },
    { label: 'Bathrooms', type: 'number', name: 'bathrooms', placeholder: 'Bathrooms' },
    { label: 'Furnished', type: 'select', name: 'furnished', options: ['No', 'Yes'] },
    { label: 'Garage', type: 'select', name: 'garage', options: ['No', 'Yes'] },
    { label: 'Swimming Pool', type: 'select', name: 'swimmingPool', options: ['No', 'Yes'] },
    { label: 'Balcony', type: 'select', name: 'balcony', options: ['No', 'Yes'] },
    { label: 'Total Rooms', type: 'number', name: 'rooms', placeholder: 'Total Rooms' },
    { label: 'Floors', type: 'number', name: 'floors', placeholder: 'Floors' },
    { label: 'Phone Number', type: 'number', name: 'phoneNumber', placeholder: 'Phone Number' }
  ]
  
  export default formFields