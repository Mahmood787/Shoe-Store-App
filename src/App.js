import {csv} from 'd3'
import React from 'react';
import {useState, useEffect} from 'react'
import './App.css';
import {Home} from './components/Home'
import {About} from './components/About'
import {Products} from './components/Products'
import { ProductDetail } from './components/ProductDetail';
import { TheShoe } from './components/TheShoe';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import {Header} from './components/Header/Header'
import {fetchedData} from './components/data'
import ReactImageZoom from 'react-image-zoom';

const App = () => {
  const props = {width: 400, height: 250, zoomWidth: 500, img: "1.jpg"};
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
