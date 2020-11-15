import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './globalStyle';
import Hero from './Components/Hero';
import { productData, productData2 } from './Components/Products/data';
import Products from './Components/Products'
import Feature from './Components/Feature';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productData}/>
      <Feature />
      <Products heading='Sweet Treats for You' data={productData2}/>
      <Footer />
    </Router>
  );
}

export default App;
