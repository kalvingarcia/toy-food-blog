import React, {Component} from 'react';
import Band from '../components/band';
import PostDisplay from '../components/post-display';
import axios from "axios";

import {ALL_RECIPES_API, COLORS} from "../utils/constants";

export default class Recipes extends Component {
  state = {
    recipes: []
  }

  componentDidMount() {
    axios.get(ALL_RECIPES_API).then(response => {
      this.setState({recipes: response.data})
    });
  }

  render() {
    return (
      <main>
        <Band
          text="Recipes for you!"
          spacer="rectangle"
          repeat={['true', 4]}
          scroll={['true', 'slow']}
          colorChange={['false', [COLORS.pink_sherbert]]}
        />
        {this.state.recipes.map(recipe => {
          return (
            <PostDisplay
              key={recipe.pk}
              source={recipe.source}
              head={recipe.title}
              body={recipe.body}
              date={recipe.date}
            />
          )
        })}
      </main>
    );
  }
}
