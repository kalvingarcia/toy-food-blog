import React, {useEffect as effect, useState} from 'react';
import ParallaxBanner from '../components/parallax-banner';
import Section from '../components/section';
import Block from '../components/block';
import {useParams as params} from 'react-router-dom';
import axios from 'axios';

import {RECIPE_BY_ID_API} from '../utils/constants';

export default function Post() {
  const [id, setID] = useState(params().postID);
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [tags, setTags] = useState([]);
  const [steps, setSteps] = useState([]);

  effect(() => {
    axios.get(RECIPE_BY_ID_API + `${id}`).then(response => {
      setRecipe(response.data[0]);
      setIngredients(response.data[1]);
      setTags(response.data[2]);
      setSteps(response.data[0].steps.split(";"))
    });
  }, [id])

  return (
    <main>
      <ParallaxBanner source={recipe.source} text={recipe.title} />
      <Section className="row recipe-section">
      <Block className="column-25 ingredient-block">
          <span>Ingredients</span>
          <ul className="ingredient-list">
            {
              ingredients.map(ingredient => {
                return (
                  <li>
                    <span>{ingredient.measure}</span>
                    <span>{ingredient.unit}</span>
                    <span>{ingredient.name}</span>
                  </li>
                );
              })
            }
          </ul>
        </Block>
        <Block className="column-75 content-block">
          <span>Tags</span>
          <ul className="recipe-tags">
            {tags.map(tag => {
              return(
                <li>
                  {tag.name}
                </li>
              );
            })}
          </ul>
          <span>Description</span>
          <p className="recipe-body">{recipe.body}</p>
          <span>Directions</span>
          <ol className="recipe-steps">
            {steps.map(step => {
              return (
                <li>
                  <span>{step}</span>
                </li>
              );
            })}
          </ol>
        </Block>
      </Section>
    </main>
  );
}
