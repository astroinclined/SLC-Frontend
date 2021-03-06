import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import { getAnchorProps } from '../../helpers';
import { CardProps } from '../types';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    height: 122,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
  },
  cover: {
    width: 100,
    height: 100,
    borderRadius: '50%'
  },
  anchor: {
    color: 'inherit',
    textDecoration: 'none',
  }
}));

export default function SecondaryCard(props: CardProps) {
  const classes = useStyles();
  const anchorProps = getAnchorProps(props.port, props.url);

  return (
    <Card>
      <Link {...anchorProps} className={classes.anchor}>
        <CardActionArea className={classes.root}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {props.title}
            </Typography>
          </CardContent>
          <CardMedia
            className={classes.cover}
            image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          />
        </CardActionArea>
      </Link>
    </Card>
  );
}
