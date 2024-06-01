import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useCart = (id, qty) => {
  const [cart, setCart] = useState({
    cart: {},
    totalAmount: 0,
  });

  const products = useSelector((store) => store.products.products);

  useEffect(() => {
    const updateCart = () => {
      const product = products.find(product => product.id === id);
      if (product) {
        const totalAmount = qty * product.price;
        setCart({
          cart: {...product, quantity: qty},
          totalAmount
        });
      }
    };

    updateCart();
  }, [id, qty, products]);

  return [cart];
};

export default useCart;
