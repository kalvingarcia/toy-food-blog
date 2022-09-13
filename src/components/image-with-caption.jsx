import React, {Component} from 'react';

export default class ImageWithCaption extends Component {

  render() {
    return (
      <div className="image-with-captions">
        <img src={this.props.image} alt="" />
        <svg height='30' width='30'>
          {this.draw_shape(this.props.shape)}
        </svg>
        <span>{this.props.caption}</span>
      </div>
    );
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
