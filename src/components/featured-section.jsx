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
      <Section>
        <div>
          <div>
            <span>Title</span>
          </div>
          <div>
            <span>Subtitle</span>
          </div>
        </div>
        <div className="row">
          {this.display.map(post => {
            return (
              <FeaturedPost
                key={post.id}
                className="col-sm"
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
}
