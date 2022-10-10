import React, {Component} from 'react';
import Section from './section';
import Parallax from './parallax';
import Shader from './shader';

export default class ParallaxBanner extends Component {
  render() {
    return (
      <Section className="parallax-banner">
        <Shader
          color='#FE64A3'
          blendMode="color-burn"
          opacity="50%"
        />
        <div className="banner-text">
          <span>{this.props.text}</span>
        </div>
        <Parallax className="parallax-image" source={this.props.source} />
      </Section>
    );
  }
}

/*

  Blend Modes:
    overlay
    color-dodge
    luminosity
    color-burn
    multiply
    screen
    darken
    lighten
    saturation
    color
    difference
    soft-light
    hard-light
    exclusion
    hue
*/
