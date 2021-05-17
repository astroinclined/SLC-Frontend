import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const breakpoint = 725;

const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
    marginTop: 'auto',
    width: '100%',
    background: '#757575',
    justifyContent: 'space-between',
    padding: '30px 36px',
    color: 'white',
    textAlign: 'left',
    fontWeight: 400,
    [theme.breakpoints.down(breakpoint)]: {
      flexDirection: 'column-reverse'
    }
  },
  links: {
    display: 'flex',
    width: '240px',
    fontWeight: 700,
    justifyContent: 'space-between',
    [theme.breakpoints.down(breakpoint)]: {
      flexDirection: 'column',
      marginBottom: theme.spacing(1)
    }
  },
  linkItem: {
    [theme.breakpoints.down(breakpoint)]: {
      marginBottom: theme.spacing(1)
    }
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
        <div className={classes.linkItem}>About</div>
        <div className={classes.linkItem}>Terms of use</div>
        <div className={classes.linkItem}>Privacy policy</div>
      </div>
    </div>
  );
}
