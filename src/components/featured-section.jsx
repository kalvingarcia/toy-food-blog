import React, {Component} from 'react';
import Section from './section';
import FeaturedPost from './featured-post';
import axios from 'axios';

import {GET_FEATURED_API} from '../utils/constants';

export default class FeaturedSection extends Component {
  state = {
    featured_recipes: []
  }

  componentDidMount() {
    axios.get(GET_FEATURED_API).then(response => {
      //randomly grab recipes from the featured set based on 'num' prop
      this.setState({featured_recipes: response.data})
    });
  }

  render() {
    return (
      <Section className="featured-section">
        <div className="featured-section-head">
          <span>Featured Recipes</span>
          <span>Subtitle</span>
        </div>
        <div className="row featured-section-body">
          <div className="featured-section-back" />
          {this.state.featured_recipes.map(post => {
            return (
              <FeaturedPost
                key={post.pk}
                className={this.generate_col()}
                source={post.source}
                head={post.title}
                body={post.body}
              />
            );
          })}
        </div>
      </Section>
    );
  }

  generate_col() {
    return `column-${Math.floor(100 / this.props.num)}`
  }
}
