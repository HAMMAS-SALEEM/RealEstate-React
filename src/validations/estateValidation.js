const estateValidation = data => {
  let errors = {}
  if (!data.name || data.name.length < 3 || data.name.length > 20) {
    errors.name = 'Name must be between 3 and 20 characters'
  }
  if (
    !data.propertySize ||
    data.propertySize.length < 3 ||
    data.propertySize.length > 20
  ) {
    errors.propertySize = 'Property size must be between 3 and 20 characters'
  }

  if (!data.price || isNaN(data.price) || data.price < 0) {
    errors.price = 'Price must be a number'
  }
  if (!data.address.street || data.address.street.length < 2) {
    errors.street = 'Street must be at least 2 characters'
  }
  if (!data.address.city || data.address.city.length < 2) {
    errors.city = 'City must be at least 2 characters'
  }
  if (!data.address.state || data.address.state.length < 2) {
    errors.state = 'State must be at least 2 characters'
  }
  if (!data.address.country || data.address.country.length < 2) {
    errors.country = 'Country must be at least 2 characters'
  }
  if (!data.type || data.type.length < 3) {
    errors.type = 'Type must be at least 3 characters'
  }
  if (!data.rooms || data.rooms < 0) {
    errors.rooms = 'Rooms must be a postive number'
  }
  if (!data.floors || data.floors < 0) {
    errors.floors = 'Floors must be a postive number'
  }
  if (!data.phoneNumber || data.phoneNumber.length < 3) {
    errors.phoneNumber = 'Phone Number must be at least 3 characters'
  }

  const requiredFields = [
    'bedrooms',
    'bathrooms',
    'floors',
    'rooms',
    'phoneNumber',
    'uploadedIMG',
  ]
  requiredFields.forEach(field => {
    if (!data[field]) {
      errors[field] = `${field} is required`
    }
  })
  return errors
}

export default estateValidation
