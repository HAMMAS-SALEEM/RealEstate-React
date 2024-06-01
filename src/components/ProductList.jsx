import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct'
import { getApiProducts } from '../services/products-service'
import { addProducts } from '../redux/products/products'
import { useDispatch } from 'react-redux'

const ProductList = () => {
  const [productsList, setProductsList] = useState([]);
 
  const dispatch = useDispatch();

  const fetchAPIProducts = async () => {
    const res = await getApiProducts();
    setProductsList(res.data);
    dispatch(addProducts(res.data))
  }

  useEffect(() => {
    fetchAPIProducts();
  }, [])
  return (
    <div className="products-container">
      {productsList &&
        productsList.map(product => (
          <SingleProduct
            key={product.id}
            id={product.id}
            name={product.title}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
    </div>
  )
}

export default ProductList;
