
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Product from './Pages/Product';
import Contact from './Pages/Contact';
import BookDetails from './Pages/BookDetails';
import Cart from './Pages/Cart';
import NotFound from './Pages/NotFound';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bookdetails/:id" element={<BookDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
