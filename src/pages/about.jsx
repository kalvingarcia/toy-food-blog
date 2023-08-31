import React, {Component} from 'react';
import Section from '../components/section';
import Parallax from '../components/parallax';
import ImageWithCaption from '../components/text-block';

export default class About extends Component {
  state = {
      bio: "Hello, we are Comí Comé. We share all of our recetas sabrosas! Our food is sure to leave you wanting more."
  }

  render() {
    return (
      <main>
        <Section className='row-800'>
          <Parallax className='column-50' source="rice.jpg" />
          <ImageWithCaption
              className='column-50'
              heading="About Us"
              shape='circle'
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
        </Section>
      </main>
    );
  }
}
