import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Block from './block';

export default class FeaturedPost extends Component {
  render() {
    return (
      <Block className={this.props.className}>
        <Link className="featured-post" to="/recipes">
          <img src={this.props.source} width='500px' alt="" />
          <span>{this.props.head}</span>
          <p>{this.props.body}</p>
        </Link>
      </Block>
    );
  }
}
