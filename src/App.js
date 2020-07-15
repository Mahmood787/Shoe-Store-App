
import React from 'react';

import './App.css';
import {Home} from './components/Home'
import {Products} from './components/Products'
import { ProductDetail } from './components/ProductDetail';
import { TheShoe } from './components/TheShoe';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import styles from './components/Header/Header.module.css'
import { Grid} from '@material-ui/core'


const App = () => {
  
  return (
    
  <BrowserRouter>

<Grid container >
        <div className={styles.header}>
            <ul>
                <li>Join Us</li>
                <li> <img src={"https://www.nike.com/assets/experience/ciclp/static/v2/1289-42d68bca589/static/icons/jordan.svg"}></img></li>
                <li>Awsome Shoes</li>
            </ul>
            <ul className={styles.rightTopBar}>
                <li>Join Us</li>
                <li><ShoppingCartIcon/></li>
                <li>Awsome Shoes</li>
            </ul>
        </div>
 </Grid>

     <div  className={styles.header}>
     <ul style={{width:'100%'}}>
       <li style={{width:'100%'}}>
         <Grid container direction="row" justify="center" spacing={4} >
         <Grid item><Link to="/"><h3>Home</h3></Link></Grid>
         <Grid item><Link to="products"><h3>Shoes</h3></Link></Grid>
         <Grid item><Link to="products"><h3>Services</h3></Link></Grid>
          <Grid item><Link to="products"><h3>About Us</h3></Link></Grid> 
          <Grid item><Link to="products"><h3>Contact Us Us</h3></Link></Grid> 
         
         </Grid>
       </li>
     </ul>
</div>
<Grid container justify="center" spacing={5} style={{backgroundColor:'gray' , margin:'0px',
background:'#f5f5f5'}}>

    <h5>COVID-19 : informations concernant les magasins et livraisons Nike. Voir ici.</h5>
</Grid>

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
