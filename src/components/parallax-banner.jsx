import React, {Component} from 'react';
import Section from './section';
import Parallax from './parallax';
import Shader from './shader';

export default class ParallaxBanner extends Component {
  render() {
    return (
      <Section className="parallax-banner">
        <Shader color="black" blendMode="multiply" />
        <div className="banner-text">
          <span>{this.props.text}</span>
        </div>
        <Parallax className="parallax-image" source={this.props.source} />
      </Section>
    );
  }
}
