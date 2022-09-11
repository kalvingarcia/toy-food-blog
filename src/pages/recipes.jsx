import React, {Component} from 'react';
import Band from '../components/band';
import PostDisplay from '../components/post-display';

export default class Recipes extends Component {
  constructor(props) {
    super(props);
    this.posts = [];

    for(let i = 0; i < 3; i++) {
      //call to json with post
      var image = [
        require('../assets/images/cheese_cake.jpg'),
        require('../assets/images/partner.png'),
        require('../assets/images/burger.jpg')
      ];

      this.posts.push({
        id: i,
        source: image[i],
        title: "Title",
        content: "This is the content.",
        date: '10-31-22'
      });
    }

    console.log("here")
  }

  render() {
    return (
      <main style={{paddingTop: '50px'}}>
        <Band
          text="Division"
          spacer="rectangle"
          repeat={['true', 4]}
          scroll={['true', 'slow']}
          colorChange={['true', ['#ff0000', '#00ff00', '#ffff00']]}
        />
        {this.posts.map(post => {
          return (
            <PostDisplay
              key={post.id}
              source={post.source}
              head={post.title}
              body={post.content}
              date={post.date}
            />
          );
        })}
      </main>
    );
  }
}
