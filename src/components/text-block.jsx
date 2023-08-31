import React, {Component} from 'react';
import Block from './block';

export default class TextBlock extends Component {
  render() {
    return (
      <Block className={this.generate_class()}>
        <h1>{this.props.heading}</h1>
        <svg height='30' width='30'>
          {this.draw_shape(this.props.shape)}
        </svg>
        <span>{this.props.body}</span>
      </Block>
    );
  }

  generate_class() {
    if(this.props.className)
      return `text-block ${this.props.className}`;
    return "text-block";
  }

  draw_shape(shape) {
    switch(shape) {
      case "rectangle":
        return (
           <rect
            width="30"
            height="30"
            style={{fill: 'black'}}
           />
        );
      case "rounded-rectangle":
        return (
          <rect
            rx="5"
            ry="5"
            width="30"
            height="30"
            style={{fill: 'black'}}
          />
        );
      case "circle":
      default:
        return (
          <circle
            cx="15"
            cy="15"
            r="15"
            fill="black"
          />
        );
    }
  }
}