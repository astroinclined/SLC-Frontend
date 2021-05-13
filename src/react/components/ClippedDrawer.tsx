import React from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { Link, useLocation } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { changeSearch } from '../actions'
import { connect } from 'react-redux';
import ModuleCard from './Card'
import ResultCard from './ResultsCard'
import PDFCard from './pdfCard'
import { Grid, ListSubheader, Typography } from "@material-ui/core";
import { kalite } from '../Data'
import logo from '../art/logo.png'
import { ReduxProps, ReduxState } from '../types';
import Footer from './Footer';

enum View {
  HOME, SEARCH, SUBJECTS, SOURCES
}

const drawerWidth = 210;

const subjects = ['Mathematics', 'Sciences', 'Social', 'Arts & Humanities', 'Technology', 'Languages', 'Literature', 'Everyday Life'];
const sources = ['African Storybooks', 'CK-12 Textbooks', 'GCF Learnfree', 'Great Books of the World', 'Hesperian Health Guides', 'Infonet - Biovision', 'Literature', 'Interactive World Map', 'KA Lite Essentials', 'Mediline Plus', 'Music Theory', 'Practical Actions', 'Wikipedia for Schools', 'Wikivoyage', 'Wikitionary'];

const groupedCategories = {
  'Mathematics': {
    'General': ['Early Math', 'Arithmetic'],
    'Algebra': ['Pre-Algebra', 'Algebra Basics', 'Algebra I', 'Algebra II'],
    'Geometry': ['Basic Geometry', 'Geometry', 'Trigonometry'],
    'Probability': ['Probability and Statistics'],
    'Calculus': ['Pre-Calculus', 'Differential Calculus', 'Integral Calculus', 'Multivariable Calculus', 'Differential Equations'],
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    font: 'Roboto Slab',

  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: '#E1DEDE',
    maxHeight: 160,
    color: theme.palette.common.black
  },
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
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    font: 'Roboto Slab',
    marginTop: 80
  },
  logo: {
    maxWidth: 210,
    height: 64,
    marginRight: 16,
    marginLeft: -12
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.25),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: -12,
    marginRight: 16,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: (props: Pick<ReduxProps, "search">) => props.search ? '20ch' : ' 0ch',
    '&:focus': {
      width: '20ch',
    },
    '&:not(:focus)': {
      cursor: (props: Pick<ReduxProps, "search">) => props.search ? 'inherit' : 'pointer',
    }
  },
  rightToolbar: {
    marginLeft: 'auto',
    marginRight: -12,

  },
  bottom: {
    width: '100%',
    background: '#C4C4C4'
  },
  listHeader: {
    fontSize: '1.5rem',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  leftAlignText: {
    textAlign: 'left',
  },
  subcategoryGrid: {
    margin: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, 0.12)'
  },
  contentContainer: {
    width: '100%',
    flexDirection: 'column',
  }
}));

const formatString = (text: string) => text.toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "-");

function ClippedDrawer(props: Pick<ReduxProps, "search" | "changeSearch">) {
  const [results, setResults] = React.useState<any[]>([]);
  const [view, setView] = React.useState(View.HOME);
  const [category, setCategory] = React.useState('');

  const classes = useStyles(props);
  const location = useLocation();

  const pathname = location.pathname.slice(1);

  const setStateFromPathname = () => {
    const isPathInSubjects = subjects.map(el => formatString(el)).includes(pathname);
    const isPathInSources = sources.map(el => formatString(el)).includes(pathname);

    if (isPathInSubjects) {
      setView(View.SUBJECTS);
      setCategory(subjects.find(el => formatString(el) === pathname)!);
      setResults(kalite.filter(el => el.tags.toLowerCase() === pathname));
    } else if (isPathInSources) {
      setView(View.SOURCES);
      setCategory(sources.find(el => formatString(el) === pathname)!);
      setResults(kalite.filter(el => formatString(el.by) === pathname));
    } else if (pathname === '') {
      setView(View.HOME);
      setResults([]);
    } else {
      // Add 404 to enum and set that here?
      setView(View.HOME);
      setResults([]);
    }
  }

  const getSubjectContent = () => {
    if (category in groupedCategories) {
      const subCategoryObj = (groupedCategories as any)[category];
      return Object.keys(subCategoryObj).map((key) => {
        return (
          <>
            <Grid container spacing={4} className={classes.subcategoryGrid}>
              <Grid item xs={12} sm={12} md={12} className={classes.leftAlignText}>
                <Typography variant="h5">{key}</Typography>
                <Typography variant="subtitle1" color="textSecondary">Description for {key}</Typography>
              </Grid>
              {results.filter(el => subCategoryObj[key].includes(el.name)).map(element =>
                <Grid item xs={12} sm={6} md={4}><ModuleCard title={element.name} author={element.by} port={element.port} url={element.url} /></Grid>
              )}
            </Grid>
          </>
        );
      });
    } else {
      return results.map(element =>
        <Grid item xs={12} sm={6} md={4}><ModuleCard title={element.name} author={element.by} port={element.port} url={element.url} /></Grid>
      );
    }
  }

  React.useEffect(() => {
    setStateFromPathname();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>

        <Toolbar>
          <img src={logo} alt='Simbi Learn Cloud' className={classes.logo} />
          <section className={classes.rightToolbar}>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  props.changeSearch(event.target.value);
                  if (event.target.value !== '') {
                    setView(View.SEARCH);
                    setResults(kalite.filter(el => el.name.toLowerCase().includes(event.target.value.toLowerCase())));
                  } else {
                    setStateFromPathname();
                  }
                }}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>

          </section>
        </Toolbar>

      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
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

      <div className={classes.contentContainer}>
        <main className={classes.content}>

          {view === View.SEARCH ? (
            <Grid direction="column" spacing={1} container className={results.length > 0 ? classes.leftAlignText : ''}>
              {results.length > 0 ? (
                <Grid item xs={12} sm={12} md={12}>
                  <Typography variant="h4">{`Results for "${props.search}"`}</Typography>
                  <Typography variant="subtitle1" color="textSecondary">{`Showing ${results.length} result${results.length > 1 ? 's' : ''}`}</Typography>
                </Grid>
              ) : (
                <Grid item xs={12} sm={12} md={12}>
                  <Typography variant="subtitle1">{`Sorry, we couldn't find any results for "${props.search}".`}</Typography>
                  <Typography variant="subtitle1">Please try another search.</Typography>
                </Grid>
              )}
              {results.map(element =>
                <Grid item xs={12} sm={12} md={12}><ResultCard title={element.name} author={element.by} port={element.port} url={element.url} /></Grid>
              )}
            </Grid>
          ) : (
            view === View.SUBJECTS ? (
              <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={12} className={classes.leftAlignText}>
                  <Typography variant="h4">Subject: {category}</Typography>
                  <Typography variant="subtitle1" color="textSecondary">Description for {category}</Typography>
                </Grid>
                {getSubjectContent()}
              </Grid>
            ) : (
              view === View.SOURCES ? (
                <Grid direction="column" spacing={1} container className={classes.leftAlignText}>
                  <Grid item xs={12} sm={12} md={12}>
                    <Typography variant="h4">Source: {category}</Typography>
                    <Typography variant="subtitle1" color="textSecondary">Description for {category}</Typography>
                  </Grid>
                  {results
                    .map(element => {
                      if (element.type === 'pdf') { return <Grid item xs={12} sm={12} md={12}><PDFCard title={element.name} author={element.by} port={element.port} url={element.url} /></Grid> }
                      else {
                        return <Grid item xs={12} sm={12} md={12}><ResultCard title={element.name} author={element.by} port={element.port} url={element.url} /></Grid>
                      }
                    })}
                </Grid>
              ) : "HOME PAGE"
            )
          )}

        </main>
        <Footer />
      </div>

    </div>

  );
}

const mapDispatchToProps = {
  changeSearch,
}

const mapStateToProps = (state: ReduxState) => {
  return {
    search: state.search,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClippedDrawer)
