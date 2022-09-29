import React, {Component} from 'react';
import Section from '../components/section';
import Band from '../components/band';
import PostGrid from '../components/post-grid';
import PostFilter from '../components/post-filter';
import axios from "axios";

import {ALL_RECIPES_API, FILTER_RECIPES_API, COLORS} from "../utils/constants";

export default class Recipes extends Component {
  state = {
    recipes: []
  }

  componentDidMount() {
    this.reset_list();
  }

  handle_filter = filters => {
    if(filters !== "")
      axios.get(FILTER_RECIPES_API + filters).then(response => {
        this.setState({recipes: response.data})
      });
    else
      this.reset_list();
  }

  reset_list() {
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
        <PostFilter
          filter={this.handle_filter}
        />
        <PostGrid
          recipes={this.state.recipes}
        />
      </main>
    );
  }
}
