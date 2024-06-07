import React, { useEffect } from 'react'

const useTransformFile = (file, setData) => {
  const TransformFile = file => {
    const reader = new FileReader()
    if (file) {
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setData({ ...data, uploadedIMG: reader.result })
      }
    } else {
      setData({ ...data, uploadedIMG: '' })
    }
  }

  useEffect(() => {
    TransformFile(data.file)
  }, [])
}

export default useTransformFile
