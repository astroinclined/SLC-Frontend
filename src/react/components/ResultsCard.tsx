import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';
import { CardProps } from '../types';
import { getAnchorProps } from '../../helpers';
import { Link } from 'react-router-dom';

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
    width: 151
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  anchor: {
    color: 'inherit',
    textDecoration: 'none',
  }
}));

export default function ResultCard(props: CardProps) {
  const classes = useStyles();
  const anchorProps = getAnchorProps(props.port, props.url);

  return (
    <Link {...anchorProps} className={classes.anchor}>
      <CardActionArea>
        <Card style={{ height: '100%' }} className={classes.root}>
          <CardMedia
            className={classes.cover}
            image="https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_lizards.jpg"
            title="Live from space album cover"
          />
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
    </Link>
  );
}
