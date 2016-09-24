import React, { Component, PropTypes } from 'react';
import history from '../../core/history';
import s from './Header.css';

class Header extends Component {
  onSearch(query) {
    history.push(`/search/${query}`);
  }

  handleOnClick = (event) => {
    if(this.searchQuery && this.searchQuery.value.length > 0) {
      this.onSearch(this.searchQuery.value);
    }
  }

  render() {
    return (
      <header className="ui text container">
        <h3 className="ui dividing header">
          <a href="http://riseproject.com/" target="_blank">RISE Project</a> Technical Test
        </h3>
        <div className="ui fluid action input">
          <input type="text" ref={(ref) => this.searchQuery = ref} placeholder="Search..." name="search" />
          <button className="ui button" onClick={this.handleOnClick}>Search</button>
        </div>
      </header>
    );
  }
}

export default Header;
