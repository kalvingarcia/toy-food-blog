import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class LinkedPost extends Component {
  render() {
    return (
      <Link to="/recipes">
        <span>Title</span>
        <div>
          <span>This is clickable</span>
        </div>
        <div>
          <p>Click this description as well</p>
        </div>
      </Link>
    );
  }
}
