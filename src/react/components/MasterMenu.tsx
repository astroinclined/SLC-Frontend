import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import { kalite, sources, subjects } from '../Data';
import { formatString } from '../../helpers';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Link, useLocation } from 'react-router-dom';
import { ReduxProps, View } from '../types';
import { connect } from 'react-redux';
import { setView, setCategory, setResults } from '../actions';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';

type DrawerVariant = "temporary" | "permanent" | "persistent";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const drawerWidth = 210;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,

  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  listHeader: {
    fontSize: '1.5rem',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function MasterMenu(props: Pick<ReduxProps, "setView" | "setCategory" | "setResults"> & Props) {
  const { setView, setCategory, setResults } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const location = useLocation();

  const pathname = location.pathname.slice(1);

  const responsiveDrawerProps: { variant: DrawerVariant } = {
    variant: isSmallScreen ? 'temporary' : 'permanent'
  }

  return (
    <Drawer
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
      {...responsiveDrawerProps}
      open={props.open}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List component='nav'>
          <ListItem>
            <ListSubheader className={classes.listHeader} disableGutters>Subjects</ListSubheader>
          </ListItem>
          {subjects.map((text) => (
            <ListItem
              button
              key={text}
              selected={formatString(text) === pathname}
              className={classes.nested}
              onClick={() => {
                setCategory(text);
                setView(View.SUBJECTS);
                setResults(kalite.filter(el => el.tags.toLowerCase() === formatString(text)));
                props.setOpen(false);
              }}
              component={Link}
              to={"/" + formatString(text)}
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem>
            <ListSubheader className={classes.listHeader} disableGutters>Sources</ListSubheader>
          </ListItem>
          {sources.map((text) => (
            <ListItem
              button
              key={text}
              selected={formatString(text) === pathname}
              className={classes.nested}
              onClick={() => {
                setCategory(text);
                setView(View.SOURCES);
                setResults(kalite.filter(el => formatString(el.by) === formatString(text)));
                props.setOpen(false);
              }}
              component={Link}
              to={"/" + formatString(text)}
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
}

const mapDispatchToProps = {
  setView,
  setCategory,
  setResults,
}

export default connect(null, mapDispatchToProps)(MasterMenu);
