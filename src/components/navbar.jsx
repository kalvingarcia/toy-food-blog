import React, {Component} from 'react';

export default class Navbar extends Component {
  position = {
    zIndex: 10,
    top: 0,
    position: this.props.pos,
    width: '100%',
  }

  color = {
    backgroundColor: this.props.color
  }

  render() {
    return (
      <nav style={this.position}>
        <div className="navbar" style={this.color}>
          <span className="brand-logo">Comí Comé</span>
          <ul className="nav-items">
            <li className="nav-link">
              <a href="/">Home</a>
            </li>
            <li className="nav-link">
              <a href="/recipes">Recipes</a>
            </li>
            <li className="nav-link">
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
