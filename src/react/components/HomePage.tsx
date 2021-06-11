import React from 'react';
import { HomeProps } from '../types';
import { makeStyles } from '@material-ui/core/styles';
import banner from '../art/banner.png'
import VideoCard from './VideoCard'
import { Grid }from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        font: 'Roboto Slab',
        marginTop: 0,
        // screen height - (top margin + footer padding) - footer text height
        minHeight: 'calc(100vh - 140px - 1.3rem)',
        
      },
    banner:{
        width: '100%',
      
    },
    contentContainer: {
        backgroundColor: ' #E3E3E3;',
        flexDirection: 'column',
         
      },
      leftAlignText: {
        textAlign: 'left',
      },
    
}));
 function HomePage(_props: HomeProps){
    const classes = useStyles()
    return(
        <div className={classes.contentContainer}>
            <img src={banner} alt="banner" className={classes.banner}></img>
            <div className={classes.content}>
            <Grid direction="column" spacing={1} container className={classes.leftAlignText}>
                <Grid item xs={12} sm={12} md={12}>
                    <VideoCard title=" placeholder title" description='placeholder description for video' />
                    
                
                </Grid>
            </Grid>
               
            </div>

        </div>
    );
}


export default HomePage