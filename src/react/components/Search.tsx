
import React, { Component } from 'react';
import '../css/search.css'
import glass from '../art/search.png'
import x from '../art/exit.png'
import { connect } from 'react-redux';
import { changeSearch } from '../actions/index'
import { ReduxProps } from '../types';

interface State {
  openSearch: boolean;
}

class Search extends Component<ReduxProps, State>{

  constructor(props: ReduxProps) {
    super(props);
    this.state = { openSearch: false };
  }

  openSearch = () => {
    this.setState({ openSearch: false });
    this.props.changeSearch("")
    window.location.href = ""
  }
  searchMyInventory = (e: string) => {

    this.props.changeSearch(e.toLowerCase())

  }
  render() {

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
const mapDispatchToProps = {
  changeSearch,
}

export default connect(null, mapDispatchToProps)(Search);
