import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';
import { CardProps } from '../types';
import { openInNewTab } from '../../helpers';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
   width:130,
   height: 100

   
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },

}));

export default function PDFCard(props: CardProps) {
  const classes = useStyles();

  return (
    <CardActionArea style= {{height:'100%'}} onClick={() => openInNewTab(props.port, props.url)}>
    <Card style={{height:'100%'}} className={classes.root}>
      <CardMedia
        className={classes.cover}
        image ='https://img.flaticon.com/icons/png/512/337/337946.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF'
        title="Live from space album cover"
      >
      </CardMedia>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {props.author}
          </Typography>
        </CardContent>
      </div>
      
    </Card>
    </CardActionArea>
  );
}