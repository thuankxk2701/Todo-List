import React, { Component } from 'react';
import './App.css';
import Search from './control/Search';
// import Views from './UI/Views';
import Text from './UI/Text/Text';

let id = 0;
class App extends Component {
  state = {
    contents: [],
  };
  searchUser = (text) => {
    if (text !== '')
      this.setState({
        contents: [
          ...this.state.contents,
          { actDelete: id++, Text: text, active: true },
        ],
      });
  };
  actDelete = (res) => {
    const contents = this.state.contents.filter(
      (item) => item.actDelete !== res
    );
    this.setState({ contents });
  };
  render() {
    return (
      <div>
        <Search searchUser={this.searchUser} />
        {/* <Views contents={this.state.contents} /> */}
        <div>
          <section className='section'>
            <div className='container'>
              <div className='content--todo'>
                <h4>Todo List</h4>
              </div>
              <div className='item-list'>
                {/* <Api content={this.props.contents} /> */}
                {this.state.contents.map((per) => (
                  <div className='item' key={per.actDelete}>
                    <span>
                      <ion-icon
                        name='arrow-forward-outline'
                        className='icon-name'
                      ></ion-icon>
                    </span>
                    <Text Text={per.Text} active={per.active} />

                    <button
                      onClick={() => this.actDelete(per.actDelete)}
                      className='delete-item'
                    >
                      <ion-icon name='trash-outline'></ion-icon>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
