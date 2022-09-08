import React, {Component} from 'react';
import Section from '../components/section';
import Block from '../components/block';
import Parallax from '../components/parallax';
import emote from '../assets/images/KalvinEmote.png';
import space from '../assets/images/space.jpg';

export default class Home extends Component {
  render() {
    return (
      <main>
        <h1>Home</h1>
        <Section>
          <div className='row'>
            <Block className='col-sm'>
              <Parallax bg_image={space} />
            </Block>
            <Block className='col-sm'>
              <h2>Welcome</h2>
              <img src={emote} alt="" />
            </Block>
          </div>
        </Section>
        <div style={{backgroundColor: '#f0f0f0', height: 1000}}>
          <span>Division</span>
        </div>
        <Section>
          <span>This is a section head</span>
          <Block>

          </Block>
        </Section>
      </main>
    );
  }
}
