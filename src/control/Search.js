import React, { Component } from 'react';

export class Search extends Component {
  state = {
    text: '',
  };
  onSubmit(e) {
    e.preventDefault();
    this.props.searchUser(this.state.text);
    this.setState({ text: '' });
  }
  onChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div className='section'>
        <form
          onSubmit={this.onSubmit.bind(this)}
          className='content grid grid--col-1'
        >
          <input
            type='text'
            placeholder='What needs to be done?'
            value={this.state.text}
            onChange={this.onChange}
            className='height'
          />

          <input type='submit' value='Add' className='btn btn-blue' />
        </form>
      </div>
    );
  }
}

export default Search;
