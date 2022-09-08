import React, {Component} from 'react';

export default class Parallax extends Component {
  state = {
    style: {
      objectFit: 'cover',
      willChange: 'transform',
      transform: `translate(-100px, -100px)`
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
      -100 + event.composedPath()[1].scrollX * .6,
      -100 + event.composedPath()[1].scrollY * .6
    ];
    this.setState({style: {
      transform: `translate(${delta[0]}px, ${delta[1]}px)`
    }});
  }
}
