import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Block from './block';
import ImageFrame from './image-frame';

export default class PostDisplay extends Component {
  render() {
    return (
      <Block className="column-25">
        <Link className="post-display" to={`/recipes/${this.props.id}`}>
          <ImageFrame
            source={this.props.source}
            size={300}
          />
          <span>{this.props.head}</span>
          <p>{this.props.body}</p>
          <span>{this.props.date}</span>
        </Link>
      </Block>
    );
  }
}
