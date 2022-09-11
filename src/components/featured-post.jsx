import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class FeaturedPost extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div>
          <img src={this.props.source} width='500px' alt="" />
        </div>
        <Link to="/recipes">
          <div>
            <span>{this.props.head}</span>
          </div>
          <div>
            <p>{this.props.body}</p>
          </div>
        </Link>
      </div>
    );
  }
}
