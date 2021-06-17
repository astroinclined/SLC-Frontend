import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';
import { ErrorPaper } from '../art/ErrorPaper';

const useStyles = makeStyles(() => ({
  background: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '40%',
    '& > *': {
      margin: '1rem',
    }
  },
  button: {
    backgroundColor: 'black',
    boxShadow: '0px 3px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 8,
    color: 'white',
    width: 174,
    height: 55,
    float: 'right',
    '&:hover': {
      backgroundColor: '#222222',
    },
  },
  flex: {
    display: 'flex',
    margin: 'auto',
    justifyContent: 'center',
  },
  errorIcon: {
    marginTop: '1.25rem',
    marginRight: '0.5rem',
  },
  heading: {
    fontSize: '1.75rem',
  }
}));

function ErrorFallback() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className={classes.flex}>
        <ErrorPaper className={classes.errorIcon} />
      <div className={classes.container}>
        <Typography variant="h4" className={classes.heading}>This page is having a problem loading</Typography>
        <Typography variant="body1">Don't worry, you didn't do anything wrong! Our system is having some issues at the moment. You can try clicking the 'reload' button below or please try coming back later.</Typography>
        <Typography variant="body1">If this problem persists, please contact your school's administrator, who will be able to contact Simbi Foundation for support.</Typography>
        <Button className={classes.button} onClick={() => window.location.reload()}>Reload</Button>
      </div>
      </div>
    </div>
  );
}

export default ErrorFallback;
