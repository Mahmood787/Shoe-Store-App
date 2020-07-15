import React from 'react'
import {Link} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  imageAv:{
      width: '50px',
  },
  avatar: {
      
    backgroundColor:'white',
    width: '55px',
    
  },
}));

    export const ProductDetail = () => {

        const classes = useStyles();
        const [expanded, setExpanded] = React.useState(false);
      
        const handleExpandClick = () => {
          setExpanded(!expanded);
        };
         
    
      
      // card ends
    return (
      
      <Grid container   alignItems="center"   spacing={5}
      direction="row" justify="center" sm={12}>
          {Object.entries(data).map(([slug,{pImage,pPrice,}])=>(
              <Grid item md={4}>
                  <Link style={{textDecoration: 'none'}} to={`/products/${slug}`} >
                    
                  <Card className={classes.root}>
            <CardHeader variant="h3" component="h2" style={{background:"#a3dc47"}}
              avatar={
                <Avatar  aria-label="recipe" className={classes.avatar}>
                  <img className={classes.imageAv} src="https://www.iconsdb.com/icons/preview/black/nike-xxl.png"alt="nike"/>
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={  <Typography variant="h6" color="textSecondary" component="p">
              {slug}
              </Typography>}
              subheader="September 14, 2016"
            />
            <CardMedia
              className={classes.media}
              image={pImage}
              title="Paella dish"
            />
            <CardContent>
              <Typography variant="h6" color="textSecondary" component="p">
             <h4>Discounted Offer</h4> { pPrice}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                  minutes.
                </Typography>
                <Typography paragraph>
                  Heating to a boil.
                </Typography>
                <Typography paragraph>
                  Add 
                </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then serve.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
                  </Link>
                  </Grid>
          )
)}
</Grid>
      
    )
            }

 
export const data = {
  "Nike-Revolution-5":{pPrice:"$88",pImage:"https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/63402e89-a42e-43cb-9cca-0aa0b5f7d848/revolution-5-running-shoe-RNxmvG.jpg"},
  "Nike-React-Infinity-Run":{pPrice:"$215",pImage:"https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-running-shoe-4jHr6L.jpg"},
  "Nike-Air-Zoom-Pegasu":{pPrice:"$155",pImage:"https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/03119662-2585-4658-bed3-1fa9a19196c2/air-zoom-pegasus-37-running-shoe-Z7QV8F.jpg"},
  "Nike-Air-Max-5":{pPrice:"$210",pImage:"https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/cmuof8adhfipkvd0f43r/air-max-95-shoe-PATZx9Gr.jpg"},
  "Nike-Air-Max-20":{pPrice:"$200",pImage:"https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/s6dp2gck3oukxj9csz5y/air-max-270-shoe-nnTrqDGR.jpg"},
  "Nike-SB-Air-ax-Stefan Janoski 2":{pPrice:"$145",pImage:"https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/ovjswbaxx4ylrwzeblou/sb-air-max-stefan-janoski-2-skate-shoe-s05dbb.jpg"},
  "Nike-Revolutin-5":{pPrice:"$88",pImage:"https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/63402e89-a42e-43cb-9cca-0aa0b5f7d848/revolution-5-running-shoe-RNxmvG.jpg"},
  "Nike-React-Infiity-Run":{pPrice:"$215",pImage:"https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-running-shoe-4jHr6L.jpg"},
  "Nike-Air-Zoom-Pegsus":{pPrice:"$155",pImage:"https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/03119662-2585-4658-bed3-1fa9a19196c2/air-zoom-pegasus-37-running-shoe-Z7QV8F.jpg"},
  "Nike-Air-Max-95":{pPrice:"$210",pImage:"https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/cmuof8adhfipkvd0f43r/air-max-95-shoe-PATZx9Gr.jpg"},
  "Nike-Air-Max-270":{pPrice:"$200",pImage:"https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/s6dp2gck3oukxj9csz5y/air-max-270-shoe-nnTrqDGR.jpg"},
  "Nike-SB-Air-Max-Stefan Janoski 2":{pPrice:"$145",pImage:"https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/ovjswbaxx4ylrwzeblou/sb-air-max-stefan-janoski-2-skate-shoe-s05dbb.jpg"},
}