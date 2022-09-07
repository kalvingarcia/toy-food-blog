import React, {Component} from 'react';
import Section from '../components/section';
import Block from '../components/block';
import Cutout from '../components/cutout';
import emote from '../assets/images/KalvinEmote.png';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Section bg_image={'https://picsum.photos/800'}>
          <div className='row'>
            <Cutout className='col-sm' />
            <Block className='col-sm'>
              <h2>Welcome</h2>
              <img src={emote} alt="" />
            </Block>
          </div>
        </Section>
        <div style={{backgroundColor: '#f0f0f0', height: 100}}>
          <span>Division</span>
        </div>
        <Section>
          <span>This is a section head</span>
          <Block>

          </Block>
        </Section>
      </div>
    );
  }
}
