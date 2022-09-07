import React, {Component} from 'react';

export default class Block extends Component {
  render() {
    return (
      <div className={this.props.className} style={{backgroundColor: '#ffffff'}}>
        {this.props.children}
      </div>
    );
  }
}
