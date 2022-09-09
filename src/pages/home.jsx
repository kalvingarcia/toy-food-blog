import React, {Component} from 'react';
import Section from '../components/section';
import Block from '../components/block';
import Parallax from '../components/parallax';
import ImageWithCaption from '../components/image-with-caption';
import Band from '../components/band';
import emote from '../assets/images/KalvinEmote.png';
import space from '../assets/images/space.jpg';

export default class Home extends Component {
  render() {
    return (
      <main>
        <Section className='row' height='800px'>
            <Block className='col-sm'>
              <Parallax bg_image={space} />
            </Block>
            <Block className='col-sm'>
              <ImageWithCaption
                image={emote}
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
          colorChange={['false']}
        />
        <Section>
        </Section>
      </main>
    );
  }
}
