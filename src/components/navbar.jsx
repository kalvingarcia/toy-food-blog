import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

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
              <NavLink
                to="/"
                style={({isActive}) => ({visibility: isActive ? 'hidden' : '', color: '#222222'})}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink
                to="/recipes"
                style={({isActive}) => ({color: isActive ? '#000000' : '#222222'})}
              >
                Recipes
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink
                to="/about"
                style={({isActive}) => ({color: isActive ? '#000000' : '#222222'})}
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
