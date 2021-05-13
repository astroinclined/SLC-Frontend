import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  footer: {
    display: 'flex',
    marginTop: 'auto',
    width: '100%',
    background: '#757575',
    justifyContent: 'space-between',
    padding: '30px 36px',
    color: 'white',
  },
  links: {
    display: 'flex',
    width: '20%',
    justifyContent: 'space-between'
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div>
        &#169; 2021 Simbi Foundation
      </div>
      <div className={classes.links}>
        <div>About</div>
        <div>Terms of use</div>
        <div>Privacy policy</div>
      </div>
    </div>
  );
}
