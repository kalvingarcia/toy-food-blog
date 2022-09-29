import React, {Component} from 'react';

export default class Shader extends Component {
  state = {
      position: 'relative',
      backgroundColor: '#000000',
      zIndex: 1,
      height: '100vh',
      width: '100%',
      opacity: '70%'
  }

  render() {
    return (
      <div style={this.state}/>
    );
  }
}
