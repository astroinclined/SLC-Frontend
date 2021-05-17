import React from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';

import { useLocation } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { changeSearch, setView, setCategory, setResults } from '../actions'
import { connect } from 'react-redux';
import ModuleCard from './Card'
import ResultCard from './ResultsCard'
import PDFCard from './pdfCard'
import { Button, ButtonGroup, Grid, Typography } from "@material-ui/core";
import { groupedCategories, kalite, sources, subjects } from '../Data'
import logo from '../art/logo.png'
import { ReduxProps, ReduxState, View } from '../types';
import Footer from './Footer';
import { formatString } from '../../helpers';
import MasterMenu from './MasterMenu';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import debounce from '@material-ui/core/utils/debounce';
import { CSSTransition } from 'react-transition-group';

interface ThemeProps {
  searchOpen: boolean;
  isSmallScreen: boolean;
  mobileMenuOpen: boolean;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    font: 'Roboto Slab',

  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
    background: '#E1DEDE',
    height: 64,
    maxHeight: 160,
    color: theme.palette.common.black,
    justifyContent: 'center'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    font: 'Roboto Slab',
    marginTop: 80,
    // screen height - (top margin + footer padding) - footer text height
    minHeight: 'calc(100vh - 140px - 1.3rem)'
  },
  logo: {
    maxWidth: 210,
    height: 64,
    marginRight: 16,
    marginLeft: -12,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 'auto',
      margin: (props: ThemeProps) => props.mobileMenuOpen && 'auto',
      paddingRight: (props: ThemeProps) => props.mobileMenuOpen && 48,
    },
  },
  search: {
    display: 'flex',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.5),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.5),
    },
    marginLeft: -12,
    marginRight: 0,
    width: '100%',
    minWidth: 0,
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
    padding: (props: ThemeProps) => props.searchOpen ? theme.spacing(1) : theme.spacing(1, 0),
    // vertical padding + font size from searchIcon
    transition: theme.transitions.create('width'),
    width: (props: ThemeProps) =>
      props.searchOpen ?
        props.isSmallScreen ? 'calc(100vw - 164px)' : 'min(calc(100vw - 400px}), 50ch)' : 0,
  },
  rightToolbar: {
    display: 'flex',
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
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  searchButton: {
    backgroundColor: (props: ThemeProps) => props.searchOpen ? fade(theme.palette.common.white, 0.5) : 'inherit',
    '&&': {
      borderRadius: (props: ThemeProps) => props.searchOpen ? '4px' : '50%',
    },
    marginRight: theme.spacing(1),
  },
  teacherPortalButton: {
    backgroundColor: '#4A4949',
    color: 'white',
    '&:hover': {
      backgroundColor: fade('#222222', 0.9),
    },
  },
  appBarButton: {
    [theme.breakpoints.up(750)]: {
      marginLeft: 20,
    }
  }
}));

function ClippedDrawer(props: ReduxProps) {
  const { view, category, results, setView, setCategory, setResults } = props;

  const searchRef = React.useRef<any>();

  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [hideAppBarControls, setHideAppBarControls] = React.useState(false);

  // This might not be nexcessary, using it to debounce the search term while keeping the input updated
  const [searchInput, setSearchInput] = React.useState('');

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));

  const classes = useStyles({ searchOpen, isSmallScreen, mobileMenuOpen });
  const location = useLocation();

  const pathname = location.pathname.slice(1);

  const setStateFromPathname = () => {
    props.changeSearch('');

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
          <Grid container spacing={4} className={classes.subcategoryGrid}>
            <Grid item xs={12} sm={12} md={12} className={classes.leftAlignText}>
              <Typography variant="h5">{key}</Typography>
              <Typography variant="subtitle1" color="textSecondary">Description for {key}</Typography>
            </Grid>
            {results.filter(el => subCategoryObj[key].includes(el.name)).map(element =>
              <Grid item xs={12} sm={6} md={4}><ModuleCard title={element.name} author={element.by} port={element.port} url={element.url} /></Grid>
            )}
          </Grid>
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
  }, [pathname]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceInput = React.useCallback(debounce((input: string) => {
    if (input !== '') {
      props.changeSearch(input);
      setView(View.SEARCH);
      setResults(kalite.filter(el => el.name.toLowerCase().includes(input.toLowerCase())));
    } else {
      setStateFromPathname();
    }
  }, 250), []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>

        <Toolbar>
          {isSmallScreen && !hideAppBarControls && (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          )}
          {!(hideAppBarControls && isSmallScreen) && (
            <img src={logo} alt='Simbi Learn Cloud' className={classes.logo} />
          )}
          {!mobileMenuOpen && (
            <section className={classes.rightToolbar}>
              {!isSmallScreen && !hideAppBarControls && (
                <>
                  <Button className={classes.appBarButton}>
                    Simbi Reading
                  </Button>
                  <Button className={classes.appBarButton}>
                    Resources
                  </Button>
                  <Button className={classes.appBarButton}>
                    Accessibility
                  </Button>
                </>
              )}
              <ButtonGroup>
                <div className={classes.search}>
                  <CSSTransition
                    in={searchOpen}
                    timeout={300}
                    classNames={classes.inputInput}
                    onEnter={() => setHideAppBarControls(true)}
                    onExited={() => setHideAppBarControls(false)}
                  >
                    <InputBase
                      placeholder="Search"
                      value={searchInput}
                      inputRef={searchRef}
                      autoFocus
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setSearchInput(event.target.value);
                        debounceInput(event.target.value);
                      }}
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      inputProps={{ 'aria-label': 'search' }}
                      endAdornment={searchOpen && (
                        <Button
                          onClick={() => {
                            setSearchInput('');
                            setStateFromPathname();
                            searchRef.current!.focus();
                          }}
                        >
                          Clear
                        </Button>
                      )}
                    />
                  </CSSTransition>
                </div>
                <IconButton
                  edge="end"
                  className={classes.searchButton}
                  color="inherit"
                  aria-label="open drawer"
                  onClick={() => {
                    setSearchOpen(!searchOpen);
                    if (!searchOpen && searchRef.current) {
                      searchRef.current.focus();
                    }
                  }}
                >
                  {searchOpen ? <CloseIcon /> : <SearchIcon />}
                </IconButton>
              </ButtonGroup>
              {!isSmallScreen && (
                <Button variant="contained" className={classes.teacherPortalButton}>
                  Teacher Portal
                </Button>
              )}
            </section>
          )}
        </Toolbar>

      </AppBar>
      <MasterMenu open={mobileMenuOpen} setOpen={setMobileMenuOpen} />

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
  setView,
  setCategory,
  setResults,
}

const mapStateToProps = (state: ReduxState) => {
  return {
    search: state.search,
    view: state.view,
    category: state.category,
    results: state.results,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClippedDrawer)
