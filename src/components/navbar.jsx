import React, {Component} from 'react';

export default class Navbar extends Component {
  sticky = {
    position: 'fixed',
    width: '100%',
    zIndex: 100
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-light" style={this.sticky}>
        <div className="container-fluid">
          <span className="navbar-brand">Comí Comé</span>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/recipes">Recipes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
