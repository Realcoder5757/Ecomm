import React from 'react';
import { useParams } from 'react-router-dom';
import { useSingleProductController } from '../controller/productController';
import { useCartController } from '../controller/cartController';

const ProductDetails = () => {
    product.images[0];
  const { id } = useParams();
  const { product, loading } = useSingleProductController(id);
  const { addProductToCart } = useCartController();

  if (loading) return <p>Loading product...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <img src={product.images[0]} alt={product.title} width="200" />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>{product.getFormattedPrice()}</p>
      <button onClick={() => addProductToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
