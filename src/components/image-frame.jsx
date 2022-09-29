import React, {Component} from 'react';

export default class ImageFrame extends Component {
  render_frame_style() {
    const radius = (this.props.borderStyle === "circle") ? `${this.props.size / 2}px` : "0px";
    console.log(radius);
    return {
      overflow: "hidden",
      margin: "50px",
      borderRadius: radius
    }
  }

  render_image_style() {
    return {
      height: `${this.props.size}px`,
      width: `${this.props.size}px`,
      objectFit: "cover"
    };
  }

  render() {
    return (
      <div style={this.render_frame_style()}>
        <img
          style={this.render_image_style()}
          src={process.env.PUBLIC_URL + "/images/" + this.props.source}
          alt=""
        />
      </div>
    );
  }
}
