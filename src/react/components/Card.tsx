
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardProps } from '../types';
import { openInNewTab } from '../../helpers';

const PICTURE_HEIGHT = '186px';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: 'auto',
    height: '100%',
  },
  media: {
    height: PICTURE_HEIGHT,
  },
  action: {
    height: '100%'
  },
  text: {
    height: `calc(100% - ${PICTURE_HEIGHT})`
  }
});

export default function ModuleCard(props: CardProps) {
  const classes = useStyles();

  return (
    <Card onClick={() => openInNewTab(props.port, props.url)} className={classes.root}>
      <CardActionArea className={classes.action}>
        <CardMedia
          className={classes.media}
          image="https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_lizards.jpg"
          title="Contemplative Reptile"
        />
        <CardContent className={classes.text}>
          <Typography gutterBottom variant="h6" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.author}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
