import React, {Component} from 'react';

export default class Parallax extends Component {
  state = {
    style: {
      objectFit: 'cover',
      willChange: 'transform',
      transform: `translate(-10%, -50%)`
    }
  }

  render() {
    return (
      <div style={this.parallax}>
        <img src={this.props.bg_image} style={this.state.style} alt="" />
      </div>
    );
  }

  parallax = {
    objectFit: 'contain',
    overflow: 'hidden'
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handle_scroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handle_scroll);
  }

  handle_scroll = event => {
    var delta = [
      -10 + event.composedPath()[1].scrollX * .01,
      -50 + event.composedPath()[1].scrollY * .01
    ];
    this.setState({style: {
      transform: `translate(${delta[0]}%, ${delta[1]}%)`
    }});
  }
}
