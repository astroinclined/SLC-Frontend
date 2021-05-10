import React, {Component} from 'react'
import Card from '../components/Card'
import {kalite} from '../Data'
import '../css/view.css'
import {connect} from 'react-redux'
import {increment} from '../actions/index'
import {useLocation} from 'react-router-dom'
class View extends Component{

    
    render(){
 
        return(
            <div className='view' >
                
                  {
                    kalite.map(element => {
                    if(this.props.search != ""){
                        
                        if(element.name.toLowerCase().includes(this.props.search))
                        {
                            
                            return <Card  title = {element.name} author={element.by} port={element.port} url = {element.url}></Card>
                        }
                    }
                    else if(this.props.search === "" && this.props.tag != ""){
                        if(element.tags.includes(this.props.tag))
                        {
                            
                            return <Card title = {element.name}  author={element.by} port={element.port} url = {element.url}></Card>
                        }

                    }
                
                })
                
                }
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
      search: state.search,
      tag: state.tag,
      count: state.count
    }
  }
  const mapDispatchToProps = () =>{
    return{
     increment
    }
  }
export default connect(mapStateToProps, mapDispatchToProps())(View);