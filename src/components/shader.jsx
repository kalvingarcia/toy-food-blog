import React, {Component} from 'react';

export default class Shader extends Component {
  state = {
      position: 'relative',
      backgroundColor: this.props.color,
      zIndex: 1,
      height: '100vh',
      width: '100%',
      opacity: this.props.opacity,
      mixBlendMode: this.props.blendMode
  }

  render() {
    return (
      <div style={this.state}/>
    );
  }
}
