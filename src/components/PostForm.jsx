import React from 'react'

const PostForm = ({handleChange, handleSubmit}) => {

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input required className="border py-1 indent-3" onChange={handleChange} type="text" placeholder="Name" name='name' />
      <input required className="border py-1 indent-3" onChange={handleChange} type="text" placeholder="Price" name='price' />
      <input required className="border py-1 indent-3" onChange={handleChange} type="text" placeholder="Property Area" name='propertySize' />
      <input required className="border py-1 indent-3" onChange={handleChange} type="text" placeholder="Street" name='street' />
      <input required className="border py-1 indent-3" onChange={handleChange} type="text" placeholder="City" name='city' />
      <input required className="border py-1 indent-3" onChange={handleChange} type="text" placeholder="state" name='state' />
      <input required className="border py-1 indent-3" onChange={handleChange} type="text" placeholder="Country" name='country' />
      <input required className="border py-1 indent-3" onChange={handleChange} type="text" placeholder="Image" name='image' />
      <input required className="border py-1 indent-3" onChange={handleChange} type="text" placeholder="Type" name='type' />
      <input required className="border py-1 indent-3" onChange={handleChange} type="text" placeholder="Bedrooms" name='bedrooms' />
      <input required className="border py-1 indent-3" onChange={handleChange} type="text" placeholder="Bathrooms" name='bathrooms' />
      <input required className="border py-1 indent-3" onChange={handleChange} type="text" placeholder="Furnished" name='furnished' />
      <input required className="border py-1 indent-3" onChange={handleChange} type="text" placeholder="Garage" name='garage' />
      <input required className="border py-1 indent-3" onChange={handleChange} type="text" placeholder="Swimming Pool" name='swimming pool' />
      <input required className="border py-1 indent-3" onChange={handleChange} type="text" placeholder="Balcony" name='balcony' />
      <button className="w-100 bg-black text-white py-1 rounded" type="submit">Submit</button>
    </form>
  )
}

export default PostForm
