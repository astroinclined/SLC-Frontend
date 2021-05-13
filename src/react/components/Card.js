
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 186,
  },
});

export default function ModuleCard(props) {
  const classes = useStyles();
  const path = "http://10.10.10.10:" + props.port + props.url;
  const onClick = () =>
  {
    window.location.assign(path)
  }
  return (
    
    <Card style={{height: '100%'}} onClick={onClick} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_lizards.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
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
