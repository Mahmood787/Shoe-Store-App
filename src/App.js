
import React from 'react';

import './App.css';
import {Home} from './components/Home'
import {Products} from './components/Products'
import { ProductDetail } from './components/ProductDetail';
import { TheShoe } from './components/TheShoe';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {Header} from './components/Header/Header'


const App = () => {
  
  return (
    
  <BrowserRouter>
  <nav>
    <Link to="/">Home</Link>
    <Link to="products">Products</Link>
  </nav>

  <Header/>
  <div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="products" element={<Products/>}>
        <Route path="/" element={<ProductDetail/>}/>
        <Route path=":shoe" element={<TheShoe/>}/>
      </Route>
    </Routes>
  </div>
  </BrowserRouter>
  );
}

export default App;
