import React, {Component} from 'react';
import Section from './section';
import FeaturedPost from './featured-post';

export default class FeaturedSection extends Component {
  constructor(props) {
    super(props);
    this.display = [];

    for(let i = 0; i < props.num; i++) {
      //call to json with post
      var image = [
        require('../assets/images/cheese_cake.jpg'),
        require('../assets/images/partner.png'),
        require('../assets/images/burger.jpg')
      ];

      this.display.push({
        id: i,
        source: image[i],
        title: "Title",
        content: "This is the content."
      });
    }
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
          {this.display.map(post => {
            return (
              <FeaturedPost
                key={post.id}
                className={this.generate_col()}
                source={post.source}
                head={post.title}
                body={post.content}
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
