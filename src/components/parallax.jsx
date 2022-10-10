import React, {Component} from 'react';
import Block from './block';

export default class Parallax extends Component {
  state = {
    style: {
      width: '200%',
      objectFit: 'cover',
      transform: `translate(-25%, -50%)`,
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
    width: '100%',
    objectFit: 'cover',
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
      -25 + event.composedPath()[1].scrollX * .02,
      -50 + event.composedPath()[1].scrollY * .02
    ];
    this.setState({style: {
      width: '200%',
      objectFit: 'cover',
      willChange: 'transform',
      transform: `translate(${delta[0]}%, ${delta[1]}%)`
    }});
  }
}
