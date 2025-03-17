import React from 'react';
import { useCartController } from '../controller/cartController';

const Cart = () => {
  const { cartItems, removeProductFromCart, updateQuantity, totalPrice, totalItems, clearCart } = useCartController();

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <img src={item.images?.[0] || 'https://via.placeholder.com/150'} alt={item.title} width="200" />
                <p>{item.title}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${item.totalPrice}</p>
                <button onClick={() => removeProductFromCart(item.id)}>Remove</button>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>Increase Quantity</button>
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>Decrease Quantity</button>
              </li>
            ))}
            
          </ul>
          <div>
            <p>Total Items: {totalItems}</p>
            <p>Total Price: ${totalPrice}</p>
            <button onClick={clearCart}>Clear Cart</button>
          </div>
          <br></br>
        </div>
      )}
    </div>
  );
};

export default Cart;
