
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardProps } from '../types';
import { getAnchorProps } from '../../helpers';
import { Link } from 'react-router-dom';

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
  },
  anchor: {
    color: 'inherit',
    textDecoration: 'none',
  }
});

export default function ModuleCard(props: CardProps) {
  const classes = useStyles();
  const anchorProps = getAnchorProps(props.port, props.url);

  return (
    <Card className={classes.root}>
      <Link {...anchorProps} className={classes.anchor}>
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
      </Link>
    </Card>
  );
}
