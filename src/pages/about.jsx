import React, {Component} from 'react';

export default class About extends Component {
  state = {
      bio: "Hello, we are Comí Comé. We share all of our recetas sabrosas! Our food is sure to leave you wanting more."
  }

  render() {
    return (
      <div>
        <h1>About</h1>
      </div>
    );
  }
}
