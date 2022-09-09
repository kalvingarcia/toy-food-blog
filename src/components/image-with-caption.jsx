import React, {Component} from 'react';

export default class ImageWithCaption extends Component {

  render() {
    return (
      <div>
        <div>
          <img src={this.props.image} alt=""/>
        </div>
        <svg width="400" height="180">
          {this.draw_shape(this.props.shape)}
        </svg>
        <div>
          <span>{this.props.caption}</span>
        </div>
      </div>
    );
  }

  draw_shape(shape) {
    switch(shape) {
      case "rectangle":
        return (
           <rect
            width="400"
            height="100"
            style={{fill: 'rgb(0,0,255)', strokeWidth: 10, stroke: 'rgb(0,0,0)'}}
           />
        );
      case "rounded-rectangle":
        return (
          <rect
            x="50"
            y="20"
            rx="20"
            ry="20"
            width="150"
            height="150"
            style={{fill: 'red', stroke: 'black', strokeWidth: 5, opacity: 0.5}}
          />
        );
      case "circle":
      default:
        return (
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="green"
            stroke-width="4"
            fill="yellow"
          />
        );
    }
  }
}
