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
  }, [])

  return (
    <main>
      <ParallaxBanner source={recipe.source} text={recipe.title} />
      <Section>
        <ul>
          <li></li>
        </ul>
      </Section>
      <Section>
        <Block>
          <ul>
            {tags.map(tag => {
              return(
                <li>
                  <span>{tag.name}</span>
                </li>
              );
            })}
          </ul>
        </Block>
        <Block>
          <p>{recipe.body}</p>
          <ol>
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
