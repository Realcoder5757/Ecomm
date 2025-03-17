import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './view/ProductList';
import ProductDetails from './view/ProductDetails';
import Cart from './view/Cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
