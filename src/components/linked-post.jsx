import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Block from './block';
import Parallax from './parallax';
import axios from 'axios';

import {NEWEST_POST_API} from '../utils/constants';

export default class LinkedPost extends Component {
  state = {
    recipe: {}
  }

  componentDidMount() {
    axios.get(NEWEST_POST_API).then(response => {
      this.setState({recipe: response.data})
    });
  }

  render() {
    return (
      <Block className={this.generate_class()}>
        <Parallax className='column-50' source={this.state.recipe.source} />
        <Link className='column-50 linked-post' to="/recipes">
          <span className="linked-post-head">Newest Recipe!</span>
          <div className="post-block">
            <span className="linked-post-title">{this.state.recipe.title}</span>
            <p className="linked-post-desc">{this.state.recipe.body}</p>
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
