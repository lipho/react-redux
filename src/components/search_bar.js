import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''}
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className='search-bar'>
        <input
          value={this.state.term}
          onChange={e => this.onInputChange(e.target.value)} />
      </div>
    )
  }
}

// state is a plain js object that is used to record and react to events.
// each class based compoent has its own state based object
// when state changes, compoments rerender along with its children
// always use this.setState() to manipulate state.

export default SearchBar;