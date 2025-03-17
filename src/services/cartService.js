import { useState } from 'react';

export const useCartController = () => {
  const [cart, setCart] = useState([]);

  const addProductToCart = (product) => {
    const newCart = [...cart, { ...product, quantity: 1 }];
    setCart(newCart);  // Update cart state
    localStorage.setItem('cart', JSON.stringify(newCart)); // Persist cart to localStorage
  };

  const removeProductFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Persist cart to localStorage
  };

  return { cartItems: cart, addProductToCart, removeProductFromCart };
};
