import React, { Component } from 'react';
import './App.css';
import Search from './control/Search';
import Views from './UI/Views';

class App extends Component {
  state = {
    contents: [],
  };
  searchUser = (text) => {
    if (text !== '')
      this.setState({
        contents: [
          ...this.state.contents,
          { actDelete: false, Text: text, active: true },
        ],
      });
  };

  render() {
    return (
      <div>
        <Search searchUser={this.searchUser} />
        <Views contents={this.state.contents} />
      </div>
    );
  }
}

export default App;
