import { useState } from 'react';
import { CartModel } from '../model/CartModel';

export const useCartController = () => {
  const [cart, setCart] = useState(new CartModel());

  const addProductToCart = (product) => {
    cart.addItem(product);
    setCart(new CartModel(cart.getItems())); // Update state
  };

  const removeProductFromCart = (productId) => {
    cart.removeItem(productId);
    setCart(new CartModel(cart.getItems())); // Update state
  };

 

  
  return { cartItems: cart.getItems(), addProductToCart, removeProductFromCart };
};
