import React, {Component} from 'react';
import PostDisplay from './post-display';
import Section from './section';

export default class PostGrid extends Component {
  render() {
    return (
      <Section className="row post-grid">
        {this.props.recipes.map(recipe => {
          return(
            <PostDisplay
              key={recipe.pk}
              id={recipe.pk}
              source={recipe.source}
              head={recipe.title}
              body={recipe.body}
              date={recipe.date}
            />
          );
        })}
      </Section>
    );
  }
}
