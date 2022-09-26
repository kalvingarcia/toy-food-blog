import React, {Component} from 'react';
import Section from './section';
import Parallax from './parallax';

export default class ParallaxBanner extends Component {
  render() {
    return (
      <Section>
        <Parallax />
      </Section>
    );
  }
}
