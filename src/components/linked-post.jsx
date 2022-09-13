import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Section from './section';
import Block from './block';
import Parallax from './parallax';

export default class LinkedPost extends Component {
  // constructor(props) {
  //   super(props)
  //
  //   //a call to the db for the post information
  // }

  render() {
    return (
      <Section className='row' height='800px'>
        <Block className='col-sm'>
          <Link to="/recipes">
            <span>Title</span>
            <div>
              <span>Click Me the Subtitle</span>
            </div>
            <div>
              <p>Click the description too</p>
            </div>
          </Link>
        </Block>
        <Block className='col-sm'>
          <Parallax bg_image={this.props.bg_image}/>
        </Block>
      </Section>
    );
  }
}
