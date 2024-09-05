import { createContext, useContext, useState } from "react";
import { faker } from '@faker-js/faker';

const CartContext = createContext();

faker.seed(100);

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  
  const productsArray = Array.from({ length: 30 }, () => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: parseFloat(faker.commerce.price()),
    image: `https://picsum.photos/640/480?random=${Math.floor(Math.random() * 1000)}`,  // Random image from Lorem Picsum
  }));
  
  const [products] = useState(productsArray);

  return (
    <CartContext.Provider value={{ cart, setCart, products }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default ContextProvider;
