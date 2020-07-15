import React from 'react'
import Button from '@material-ui/core/Button';
import {Link } from 'react-router-dom';


export const Home = () => {
    return (
        <>
<Link to="products"><Button variant="contained" color="primary" disableElevation>
  Buy Now With Amazing Discounts
</Button></Link>

<img style={{width:'100%',margin:'0px' , padding:'0px'}}src={"https://static.dezeen.com/uploads/2020/04/nike-air-max-2090-trainer-design_dezeen_2364_hero_10-1704x958.jpg"} alt=""/>
   </>     
    )
}
