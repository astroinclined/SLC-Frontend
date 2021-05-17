import React, { Component } from 'react'
import Card from './Card'
import { kalite } from '../Data'
import '../css/view.css'
import { connect } from 'react-redux'
import { ReduxState } from '../types'

interface ViewProps {
  search: string;
  tag: string;
}

class View extends Component<ViewProps>{


  render() {

    return (
      <div className='view' >

        {
          kalite.map(element => {
            if (this.props.search !== "") {

              if (element.name.toLowerCase().includes(this.props.search)) {

                return <Card title={element.name} author={element.by} port={element.port} url={element.url}></Card>
              }
            }
            else if (this.props.search === "" && this.props.tag !== "") {
              if (element.tags.includes(this.props.tag)) {

                return <Card title={element.name} author={element.by} port={element.port} url={element.url}></Card>
              }

            }
            return null;
          })

        }
      </div>
    )
  }
}


const mapStateToProps = (state: ReduxState) => {
  return {
    search: state.search,
  }
}

export default connect(mapStateToProps)(View);