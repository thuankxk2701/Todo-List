import React, { Component } from 'react';
import Text from './Text/Text';
// const api = (props) => {
//   const text = (res) => {
//     return res.map(
//       (per) =>
//         !per.actDelete && (
//           <Text Text={per.Text} active={per.active} actDelete={per.actDelete} />
//         )
//     );
//   };
//   return text(props.content);
// };
class api extends Component {
  render() {
    return (this.state = this.props.content).map(
      (per) =>
        !per.actDelete && (
          <div className='item'>
            <span>
              <ion-icon
                name='arrow-forward-outline'
                className='icon-name'
              ></ion-icon>
            </span>
            <Text Text={per.Text} active={per.active} />

            <button className='delete-item'>
              <ion-icon name='trash-outline'></ion-icon>
            </button>
          </div>
        )
    );
  }
}

export default api;
