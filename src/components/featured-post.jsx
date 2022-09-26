import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Block from './block';

export default class FeaturedPost extends Component {
  render() {
    return (
      <Block className={this.props.className}>
        <Link className="featured-post" to="/recipes">
          <img src={process.env.PUBLIC_URL + "/images/" + this.props.source} alt="" />
          <span>{this.props.head}</span>
          <p>{this.props.body}</p>
        </Link>
      </Block>
    );
  }
}
