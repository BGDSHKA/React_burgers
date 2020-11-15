import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './globalStyle';
import Hero from './Components/Hero';
import { productData } from './Components/Products/data';
import Products from './Components/Products'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productData}/>
    </Router>
  );
}

export default App;
