import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    font: 'Roboto Slab',
  },
  background: {
    width: '100vw',
    height: '100vh',
    backgroundImage: 'url(/404.png)',
    backgroundPosition: 'center',
    color: 'white',
  },
  container: {
    background: 'rgba(42, 39, 60, 0.87)',
    borderRadius: 10,
    margin: '60vh auto 0px auto',
    width: '45%',
    '& > *': {
      padding: '1rem',
      paddingBottom: 0,
    }
  },
  button: {
    color: 'black',
    backgroundColor: 'white', 
    width: '20%',
    padding: '6px 8px',
    margin: '1rem',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.80)', 
    }
  },
  errorCode: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(30px, -58px)',
  }
}));

function PageNotFound() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <Typography variant="h5">PAGE NOT FOUND</Typography>
        <Typography variant="body1">It seems the page you are looking for got lost in space. But don't worry! There are still several Simbi Learn Cloud pages you can browse for your learning.</Typography>
        <Button className={classes.button} onClick={() => history.push('/')}>Back to home</Button>
      </div>
      <Typography variant="h6" className={classes.errorCode}>404</Typography>
    </div>
  );
}

export default PageNotFound;
