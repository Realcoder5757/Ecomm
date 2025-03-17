export class CartModel {
    constructor() {
      // Initialize cart items from localStorage or as an empty array
      const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
      this.items = savedCart;
    }
  
    // Add product to the cart
    addItem(product) {
      const existingItem = this.items.find(item => item.id === product.id);
  
      if (existingItem) {
        // If product already exists, increase quantity
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        // Add new item with quantity 1
        this.items.push({
          ...product,
          quantity: 1,
          totalPrice: product.price,
        });
      }
  
      this.updateLocalStorage(); // Persist to localStorage
    }
  
    // Remove product from the cart
    removeItem(productId) {
      this.items = this.items.filter(item => item.id !== productId);
      this.updateLocalStorage(); // Persist to localStorage
    }
  
    // Update quantity of a product in the cart
    updateQuantity(productId, quantity) {
      const item = this.items.find(item => item.id === productId);
      if (item) {
        item.quantity = quantity;
        item.totalPrice = item.quantity * item.price;
      }
      this.updateLocalStorage(); // Persist to localStorage
    }
  
    // Get all cart items
    getItems() {
      return this.items;
    }
  
    // Get the total price of all items in the cart
    getTotalPrice() {
      return this.items.reduce((total, item) => total + item.totalPrice, 0);
    }
  
    // Get the total number of items in the cart
    getTotalItems() {
      return this.items.reduce((total, item) => total + item.quantity, 0);
    }
  
    // Clear the cart
    clearCart() {
      this.items = [];
      this.updateLocalStorage(); // Persist to localStorage
    }
  
    // Helper method to update localStorage with the latest cart items
    updateLocalStorage() {
      localStorage.setItem('cart', JSON.stringify(this.items));
    }
  }
  