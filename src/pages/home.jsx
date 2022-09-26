import React, {Component} from 'react';
import Section from '../components/section';
import Parallax from '../components/parallax';
import ImageWithCaption from '../components/image-with-caption';
import Band from '../components/band';
import FeaturedSection from '../components/featured-section';
import LinkedPost from '../components/linked-post';
import axios from "axios";

import {COLORS} from '../utils/constants';

export default class Home extends Component {
  render() {
    return (
      <main>
        <Section className='row-800'>
            <Parallax className='column-50' source="rice.jpg" />
            <ImageWithCaption
              className='column-50'
              source="tamales.jpg"
              shape='circle'
              caption="Welcome to our food blog"
            />
        </Section>
        <Band
          text="Comé Conmigo"
          spacer="circle"
          repeat={['true', 4]}
          scroll={['false', 'slow']}
          colorChange={['true', [COLORS.spanish_pink, COLORS.laurel_green]]}
        />
        <FeaturedSection num={3} />
        <Section>
          <LinkedPost />
        </Section>
      </main>
    );
  }
}
