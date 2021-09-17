import React, { Component } from 'react';
import Api from './api';
export class Views extends Component {
  state = {};
  render() {
    return (
      <div>
        <section className='section'>
          <div className='container'>
            <div className='content--todo'>
              <h4>Todo List</h4>
            </div>
            <div className='item-list'>
              <Api content={(this.state = this.props.contents)} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Views;
