import React from 'react';
import { makeStyles,fade } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import {tagSearch,changeSearch, sourceSearch} from '../actions/index'
import { connect } from 'react-redux';
import ModuleCard from './Card'
import ResultCard from './ResultsCard'
import PDFCard from './pdfCard'
import {Grid,BottomNavigation, Button} from "@material-ui/core";
import {kalite} from '../Data'
import logo from '../art/logo.png'

const drawerWidth = 210;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    font: 'Roboto Slab',
    
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: '#E1DEDE',
    maxHeight: 160
   
   
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
  logo:{
    maxWidth: 210,
    height: 64,
    marginRight:16,
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
    }},
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
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    rightToolbar: {
      marginLeft: 'auto',
      marginRight: -12,
    
    },
    bottom: {
      width: '100%',
      background: '#C4C4C4'
    }
  
}));

 function ClippedDrawer(props) {
  const classes = useStyles();
  let i = 0

  const onChange = (event) =>{
    
    props.changeSearch(event.target.value)
    props.tagSearch("")
    props.sourceSearch("")
   
  
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar  position="fixed" className={classes.appBar}>
        
        <Toolbar>
          <img
            src= {logo} alt='Simbi Learn Cloud' className={classes.logo}
           
          />
        <section className={classes.rightToolbar}>
          
          <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search"
                onChange={onChange}
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
        <div  className={classes.drawerContainer}>
          <List component='nav'>
            {['Mathematics', 'Sciences', 'Social', 'Arts & Humanities', 'Technology', 'Languages', 'Literature','Everyday Life'].map((text, index) => (
             
              <ListItem 
              button
              
              onClick={()=>{props.tagSearch(text.toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "-")); props.changeSearch("");props.sourceSearch("")}} component={Link} to={"/" + text.toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "-")} button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['African Storybooks', 'CK-12 Textbooks','GCF Learnfree', 'Great Books of the World','Hesperian Health Guides','Infonet - Biovision', 'Literature','Interactive World Map','KA Lite Essentials','Mediline Plus','Music Theory','Practical Actions','Wikipedia for Schools','Wikivoyage','Wikitionary'].map((text, index) => (
              <ListItem onClick={()=>{props.sourceSearch(text); props.changeSearch(""); props.tagSearch(""); }} component={Link} to={"/" + text.toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "-")} component={Link} to={"/" + text.toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "-")} button key={text} button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>

        <Grid container spacing = {4}>
          {kalite.map(element => {
 
                    if(props.tag!= ""){
                        
                      console.log(props.tag)
                        if(element.tags.toLowerCase()===props.tag.toLowerCase())
                        {
                            
                            return <Grid item xs={12} sm={6} md={4}><ModuleCard  title = {element.name} author={element.by} port={element.port} url = {element.url}/></Grid>
                        }
                    }
                })}
        </Grid>
        <Grid direction={'column'} spacing= {1} container  >
         {kalite.map(element => {
 
          if(props.search!= ""){
              
            
              if(element.name.toLowerCase().includes(props.search))
              {
                  
                  return <Grid item xs={12} sm={12} md={12}><ResultCard  title = {element.name} author={element.by} port={element.port} url = {element.url}/></Grid>
              }
          }
      })}
        </Grid>
        <Grid direction={'column'} spacing= {1} container>
        {kalite.map(element => {
            
            if(props.source!= ""){
                console.log(props.source.toLowerCase().replace(/[^A-Z0-9]+/ig, ""))
              
                if(element.by.toLowerCase().replace(/[^A-Z0-9]+/ig, "")===props.source.toLowerCase().replace(/[^A-Z0-9]+/ig, ""))
                {
                    if(element.type === 'pdf')
                     {return <Grid item xs={12} sm={12} md={12}><PDFCard  title = {element.name} author={element.by} port={element.port} url = {element.url}/></Grid>}
                    else
                    {
                      return <Grid item xs={12} sm={12} md={12}><ResultCard  title = {element.name} author={element.by} port={element.port} url = {element.url}/></Grid>
                    }
                }
            }
            })}
          
        </Grid>
       
        
      </main>
      
    </div>
    
  );
}
const mapDispatchToProps = () =>{
  return{
    tagSearch,changeSearch, sourceSearch
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.search,
    tag: state.tag,
    source: state.source
  }
}
export default connect(mapStateToProps, mapDispatchToProps())(ClippedDrawer)
