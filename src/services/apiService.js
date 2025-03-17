import { ProductModel } from '../model/ProductModel';

export const apiService = {
  async fetchAllProducts() {
    try {
      const response = await fetch(`https://api.escuelajs.co/api/v1/products`);
      if (!response.ok) throw new Error('Failed to fetch products');
      const data = await response.json();
      return data.map(item => new ProductModel(item.id, item.title, item.price, item.images, item.description));
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  },

  async fetchProductById(productId) {
    try {
      const response = await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`);
      if (!response.ok) throw new Error('Failed to fetch product');
      const data = await response.json();
      return new ProductModel(data.id, data.title, data.price, data.images, data.description);
    } catch (error) {
      console.error('Error fetching product:', error);
      return null;
    }
  }
};
