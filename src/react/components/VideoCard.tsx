import { makeStyles, fade } from '@material-ui/core/styles';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {VideoCardProps} from '../types'
import { Button, Typography} from "@material-ui/core";




const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
      
      },
        root: {
          display: 'flex',
          width: '100%',
          backgroundColor: 'transparent',
          border: 'none',
          boxShadow: 'none',
          borderRadius: 0,
          alignItems: 'center',
        
        },
        details: {
          display: 'flex',
          flexDirection: 'column',
        },
        cover: {
          width: 482,
          height: 268
        },
        watchButton: {
          backgroundColor: '#4A4949',
          color: 'white',
          '&:hover': {
            backgroundColor: fade('#222222', 0.9),
          },
          height:55,
          width: 260
        },
      

   
}));
 function VideoCard(props: VideoCardProps){
    const classes = useStyles()
    return(
    <Card className={classes.root}>
       <CardMedia
        className={classes.cover}
        image="https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_lizards.jpg"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          
          <Typography component="h5" variant="h5">
            {props.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {props.description}
          </Typography>
          <Button variant= "contained" className= {classes.watchButton}> Watch Video </Button>
        </CardContent>
        
      </div>
  
    </Card>


    );
}


export default VideoCard