
import React, { Fragment,Component } from 'react';
import '../css/search.css'
import glass from '../art/search.png' 
import x from '../art/exit.png'
import {useSelector} from 'react-redux'
import {connect} from 'react-redux';
import {changeSearch,tagSearch} from '../actions/index'
class Search extends Component{
     
    constructor(props){
        super(props);
        this.state = {openSearch: false};
        
    }


    openSearch = () => {
        this.setState({ openSearch: false });
        this.props.changeSearch("")
        window.location.href = ""
      }
    searchMyInventory = (e) =>
    {
  
        this.props.changeSearch(e.toLowerCase())
        this.props.tagSearch("")
        
    }
    render(){
     
        return (
            
                this.state.openSearch ? (<div className='searchBox'>
                  <input type="text" placeholder="Search a topic" onChange={(e) => this.searchMyInventory(e.target.value)} />
                  <img alt="" src={x} className='closeSearch' onClick={() => this.openSearch()} />
                </div>) : (<div className='search' onClick={() => this.setState({ openSearch: true })}>
                  <img className='image' alt="" src={glass} />
                </div>
              )
      );
    }
}
const mapDispatchToProps = () =>{
  return{
    changeSearch, tagSearch
  }
}

export default connect("",mapDispatchToProps())(Search);
