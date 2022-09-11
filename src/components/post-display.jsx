import React, {Component} from 'react';

export default class PostDisplay extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={this.props.source} height='800px' alt="" />
        </div>
        <div>
          <span>{this.props.head}</span>
        </div>
        <div>
          <p>{this.props.body}</p>
        </div>
        <div>
          <span>{this.props.date}</span>
        </div>
      </div>
    );
  }
}
