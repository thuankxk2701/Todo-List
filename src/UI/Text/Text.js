import React, { Component } from 'react';

function WarningBanner(props) {
  if (props.active) {
    return <span className='item-name'>{props.Text}</span>;
  }
  return <strike className='item-name italic'>{props.Text}</strike>;
}
class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Text: props.Text,
      active: props.active,
    };
    this.handleToggleTick = this.handleToggleTick.bind(this);
  }
  handleToggleTick() {
    this.setState((prevState) => ({
      active: !prevState.active,
    }));
  }

  render() {
    return (
      <>
        <WarningBanner active={this.state.active} Text={this.state.Text} />
        <div className='item-icons'>
          <button onClick={this.handleToggleTick} className='complete-item'>
            <ion-icon name='checkmark-circle-outline'></ion-icon>
          </button>
        </div>
      </>
    );
  }
}

export default Text;
