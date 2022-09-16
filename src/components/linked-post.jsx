import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Block from './block';
import Parallax from './parallax';

export default class LinkedPost extends Component {
  // constructor(props) {
  //   super(props)
  //
  //   //a call to the db for the post information
  // }

  render() {
    return (
      <Block className={this.generate_class()}>
        <Parallax className='column-50' bg_image={this.props.bg_image}/>
        <Link className='column-50 linked-post' to="/recipes">
          <span className="linked-post-head">Title</span>
          <div className="post-block">
            <span className="linked-post-title">Click Me the Subtitle</span>
            <p className="linked-post-desc">Click the description too</p>
          </div>
        </Link>
      </Block>
    );
  }

  generate_class() {
    if(this.props.className)
      return `row ${this.props.className}`;
    return "row-600";
  }
}
