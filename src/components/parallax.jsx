import React, {Component} from 'react';
import Block from './block';

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
      <Block className={this.props.className}>
        <div style={this.parallax}>
          <img src={process.env.PUBLIC_URL + "/images/" + this.props.source} style={this.state.style} alt="" />
        </div>
      </Block>
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
