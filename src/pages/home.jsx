import React, {Component} from 'react';
import Section from '../components/section';
import Block from '../components/block';
import Parallax from '../components/parallax';
import ImageWithCaption from '../components/image-with-caption';
import Band from '../components/band';
import FeaturedSection from '../components/featured-section';
import LinkedPost from '../components/linked-post';
import me from '../assets/images/me.png';
import rice from '../assets/images/rice.jpg';
import spaghetti from '../assets/images/spaghetti.jpg'

export default class Home extends Component {
  render() {
    return (
      <main style={{paddingTop: '50px'}}>
        <Section className='row' height='800px'>
            <Block className='col-sm'>
              <Parallax bg_image={rice} />
            </Block>
            <Block className='col-sm'>
              <ImageWithCaption
                image={me}
                shape='rounded-rectangle'
                caption="Welcome to our food blog"
              />
            </Block>
        </Section>
        <Band
          text="Division"
          spacer="rectangle"
          repeat={['true', 4]}
          scroll={['true', 'slow']}
          colorChange={['true', ['#ff0000', '#00ff00', '#ffff00']]}
        />
        <FeaturedSection num={3} />
        <LinkedPost bg_image={spaghetti} />
      </main>
    );
  }
}
