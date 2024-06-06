const emailVerifier = (email) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  return emailRegex.test(email)
}

const authValidation = data => {
    let errors = {}
  
    if (!data.username || data.username.length < 3 || data.username.length > 20) {
      errors.username = 'Username must be between 3 and 20 characters'
    }

    if (!data.email || !emailVerifier(data.email)) {
      errors.email = 'Email is not valid'
    }

    if (!data.password || data.password.length < 6) {
      errors.password = 'Password must be at least 6'
    }
  
    const requiredFields = [
      'username',
      'email',
      'password',
    ]
    requiredFields.forEach(field => {
      if (!data[field]) {
        errors[field] = `${field} is required`
      }
    })
    return errors
  }
  
  export default authValidation
  