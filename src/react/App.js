import logo from './logo.svg';
import './App.css';
import {Navbar,Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../react/css/header.css'

import Search from './components/Search'
import View from './components/View'
import Main from './components/Main'
import {Component} from 'react'
import {tagSearch,changeSearch} from './actions/index'
import {connect} from 'react-redux'
import { Link, Route, Switch} from 'react-router-dom'
import ClippedDrawer from './components/ClippedDrawer'


class App extends Component{
       
  constructor(props){
    super(props);
}


  updateRoute = () =>
  {
    let location = window.location.pathname
    location = location.replace('/', '')
    this.props.tagSearch(location)
    this.props.changeSearch("")

    
  }
  render(){
   
    return (
      <div className="App">
        <ClippedDrawer/>
      </div>
      /**<div className="App">
      
        <Switch>
          <Route  path='/home' component={Main}/>
          <Route path='/' component={View} />
          <Route path = '/simbi' />
        </Switch>
        <Navbar className="simbi_header"  bg="light" variant="light">
        
        <img className='simbi_logo' alt="" src={Logo}
        width="125 px"
        height="60 px"/>
        <Nav sticky='top' className="ml-auto">
          <Nav.Link  href="#simbi">Simbi Reading</Nav.Link>
          <Nav.Link href="#resources">Resources</Nav.Link>
          <Nav.Link href="#accessibility">Accessibility</Nav.Link>
          <Search></Search>
         
        </Nav>
      </Navbar>
      {this.props.search==="" ? "" : 
      <div className= 'result'>
        Results for "{this.props.search}"
      </div>}
      <Navbar sticky='top' className="simbi_navbar">
        <Nav sticky='top' className="flex-column">
  
        <Navbar.Brand>
        Subjects
      </Navbar.Brand>
        <Nav.Link  as={Link} to='mathematics' onClick = {this.updateRoute}>Mathematics</Nav.Link>
        <Nav.Link as={Link} to='sciences' onClick = {this.updateRoute}>Science</Nav.Link>
        <Nav.Link as={Link} to='social' onClick = {this.updateRoute}>Social Sciences</Nav.Link>
        <Nav.Link as={Link} to='arts-humanities' onClick = {this.updateRoute}>Arts & Humanities</Nav.Link>
        <Nav.Link as={Link} to='technology' onClick = {this.updateRoute}>Technology</Nav.Link>
        <Nav.Link as={Link} to='languages' onClick = {this.updateRoute}>Languages</Nav.Link>
        <Nav.Link as={Link} to='literature' onClick = {this.updateRoute}>Literature</Nav.Link>
        <Nav.Link as={Link} to='everday-life' onClick = {this.updateRoute}>Everyday Life</Nav.Link>
        <Navbar.Brand>
        Sources
      </Navbar.Brand>

        <Nav.Link>African Storybooks</Nav.Link>
        <Nav.Link>GCF Learnfree</Nav.Link>
        <Nav.Link>Great Books of the World</Nav.Link>
        <Nav.Link>Hesperian Health Guides</Nav.Link>
        <Nav.Link>Infonet - Biovision</Nav.Link>
        <Nav.Link>Literature</Nav.Link>
        <Nav.Link>Interactive World Map</Nav.Link>
        <Nav.Link>KA Lite Essentials</Nav.Link>
        <Nav.Link>Mediline Plus</Nav.Link>
        <Nav.Link>Music Theory</Nav.Link>
        <Nav.Link>Practical Action</Nav.Link>
        <Nav.Link>Wikipedia for Schools</Nav.Link>
        <Nav.Link>Wikivoyage</Nav.Link>
        <Nav.Link>Wikitionary</Nav.Link>
      
        </Nav>
        
      </Navbar>
  
      <View></View>

      </div>**/
    );
  }
}
const mapDispatchToProps = () =>{
  return{
    tagSearch,changeSearch
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.search,
    tag: state.tag
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(App);
