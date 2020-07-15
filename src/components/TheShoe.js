import React from 'react'
import {data} from './ProductDetail';
import { useParams } from 'react-router';
import { Grid } from '@material-ui/core';
import HoverRating from './Rating';
import Button from '@material-ui/core/Button';

//card starts

export const TheShoe= () => {
    const {shoe} = useParams()
    const shoess= data[shoe];
    if (!shoess){
        return <h1>Shoe not found</h1>
    }
    const {pImage,pPrice}=shoess; 
    return (<>
    <Grid container spacing={5} >
        <Grid item xs={6} >
        <img src={pImage} style={{width:'100%', height:'100%'}}alt="pic"  />
        </Grid>
        <Grid item xs={6}  >
            <Grid container >
            <h1>{shoe}</h1>
            <Grid container justify="space-between">
            <h3>Price {pPrice}</h3>
            <HoverRating/>
            <p> Lorum Ipsum ipsin a fdf Lorum Ipsum ipsin a fdfLorum Ipsum ipsin a fdfLorum Ipsum ipsin a fdf
            Lorum Ipsum ipsin a fdfLorum Ipsum ipsin a fdfLorum Ipsum ipsin a fdfLorum Ipsum ipsin a fdfLorum Ipsum ipsin a fdf
            </p>
            <a href="#">Read more</a>
            <Grid container  justify="space-between">
                <h4>Location :</h4>
                <h4>Karachi</h4>
            </Grid>
            <Grid container  justify="space-between">
                <h4>Delivery Time :</h4>
                <h4>5 Days</h4>
            </Grid>
            <Grid container  justify="space-between">
                <h4>Terms of Delivery</h4>
                <h4>Cash on Delivery</h4>
            </Grid>
            <Grid container  justify="space-between">
                <h4>Sizes Available:</h4>
                <Grid container justify="space-between">
                 <Button variant="contained">6</Button>
                 <Button variant="contained">7</Button>
                 <Button variant="contained">8</Button>
                 <Button variant="contained">9</Button>
                 <Button variant="contained">10</Button>
                 <Button variant="contained">11</Button>
                 </Grid>
            </Grid>
            

            </Grid>
            </Grid>
        </Grid>

    </Grid>
        
        
        </>
    )
}

