import { useState, useEffect } from 'react';
import { apiService } from '../services/apiService';

export const useProductController = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await apiService.fetchAllProducts();
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return { products, loading };
};

export const useSingleProductController = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await apiService.fetchProductById(productId);
      setProduct(data);
      setLoading(false);
    };
    fetchProduct();
  }, [productId]);

  return { product, loading };
};
