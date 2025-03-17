// src/view/ProductList.js

import React from 'react';
import { useProductController } from '../controller/productController';
import { useCartController } from '../controller/cartController';

const ProductList = () => {
  const { products, loading } = useProductController();
  const { addProductToCart } = useCartController();

  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <div>
      <h1>Product List</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <div key={product.id} style={{ margin: 20, width: 250, textAlign: 'center' }}>
            <img
              src={product.images[0]}  // Display the first image of the product
              alt={product.title}
              style={{
                width: 200,
                height: 200,
                objectFit: 'cover',
                borderRadius: 10,
                marginBottom: 10,
              }}
            />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p><strong>${product.price}</strong></p>
            <button onClick={() => addProductToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
