import React, {Component} from 'react';
import Section from './section';
import Block from './block';
import axios from 'axios';

import {ALL_COLLECTIONS_API} from '../utils/constants';

export default class PostFilter extends Component {
  state = {
    collections: [],
    filters: []
  }

  componentDidMount() {
    axios.get(ALL_COLLECTIONS_API).then(response => {
        this.setState({collections: response.data});
    })
  }

  handle_change = e => {
    let new_list = this.state.filters;

    if(e.target.checked) {
      new_list.push(e.target.value);
      this.setState({filters: new_list});
    } else {
      const index = new_list.indexOf(e.target.value);
      new_list.splice(index, 1)
      if(index > -1)
        this.setState({filters: new_list})
    }
  }

  render() {
    return (
      <Section className="post-filter">
        <span>Filter Recipe by Tag</span>
        <div className="filter-container">
          {this.state.collections.map(collection => {
            return (
              <label htmlFor={collection.name}>
                <input
                  type="checkbox"
                  id={collection.name}
                  value={collection.name}
                  onChange={this.handle_change}
                />
                {collection.name}
              </label>
            );
          })}
        </div>
        <button onClick={() => this.props.filter(this.state.filters.join('-'))}>Filter</button>
      </Section>
    );
  }
}
