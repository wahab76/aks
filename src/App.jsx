import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Reviews from './components/Review';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Products />
      <Reviews />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
