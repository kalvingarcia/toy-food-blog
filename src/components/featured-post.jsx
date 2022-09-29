import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Block from './block';
import ImageFrame from './image-frame';

export default class FeaturedPost extends Component {
  render() {
    return (
      <Block className={this.props.className}>
        <Link className="featured-post" to={`/recipes/${this.props.pk}`}>
          <ImageFrame
            source={this.props.source}
            size={450}
            borderStyle="circle"
          />
          <span>{this.props.title}</span>
          <p>{this.props.body}</p>
        </Link>
      </Block>
    );
  }
}
