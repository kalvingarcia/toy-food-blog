import React, {Component} from 'react';
import Block from './block';
import ImageFrame from './image-frame';

export default class ImageWithCaption extends Component {
  render() {
    return (
      <Block className={this.generate_class()}>
        <ImageFrame
          source={this.props.source}
          size={400}
        />
        <svg height='30' width='30'>
          {this.draw_shape(this.props.shape)}
        </svg>
        <span>{this.props.caption}</span>
      </Block>
    );
  }

  generate_class() {
    if(this.props.className)
      return `image-with-captions ${this.props.className}`;
    return "image-with-captions";
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
