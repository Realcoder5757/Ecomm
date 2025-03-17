// src/model/fetchProducts.js

export const fetchProducts = async () => {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/products'); // Platzi fake API URL
      const data = await response.json();
      return data;  // Return the fetched data
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];  // Return empty array in case of error
    }
  };
  