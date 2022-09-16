import React, {Component} from 'react';
import Section from '../components/section';
import Block from '../components/block';
import Parallax from '../components/parallax';
import ImageWithCaption from '../components/image-with-caption';
import Band from '../components/band';
import FeaturedSection from '../components/featured-section';
import LinkedPost from '../components/linked-post';
import colors from '../assets/utils/colors';
import tamales from '../assets/images/tamales.jpg';
import rice from '../assets/images/rice.jpg';
import spaghetti from '../assets/images/spaghetti.jpg';

export default class Home extends Component {
  render() {
    return (
      <main>
        <Section className='row-800'>
            <Parallax className='column-50' bg_image={rice} />
            <ImageWithCaption
              className='column-50'
              image={tamales}
              shape='circle'
              caption="Welcome to our food blog"
            />
        </Section>
        <Band
          text="Comé Conmigo"
          spacer="circle"
          repeat={['true', 4]}
          scroll={['false', 'slow']}
          colorChange={['true', [colors.spanish_pink, colors.laurel_green]]}
        />
        <FeaturedSection num={3} />
        <Section>
          <LinkedPost bg_image={spaghetti} />
        </Section>
      </main>
    );
  }
}
