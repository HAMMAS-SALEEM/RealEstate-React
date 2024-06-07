const TransformFile = async file => {
  const reader = new FileReader()
  let value = ''
  if (file) {
    await reader.readAsDataURL(file)
    reader.onloadend = () => {
      value = reader.result
      return value  
    }
  }
}

export default TransformFile