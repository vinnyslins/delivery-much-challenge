import axios from 'axios'

import Recipe from '../models/Recipe'
import RecipePuppy, { RecipeResponse } from './models/RecipePuppy'
import { getGif } from './Giphy'

export const client = axios.create({
  baseURL: process.env.RECIPE_PUPPY_URL
})

export const buildRecipe = async (recipe: RecipeResponse): Promise<Recipe> => {
  const title = recipe.title.replace(/\[a-z]/g, '').trim()

  return {
    title,
    ingredients: recipe.ingredients.split(', '),
    link: recipe.href,
    gif: await getGif(title)
  }
}

export const getRecipes = async (ingredients: string[], page: number): Promise<Recipe[]> => {
  const { data } = await client.get<RecipePuppy>('/api', {
    params: {
      i: ingredients.join(','),
      p: page
    }
  })

  return Promise.all(data.results.map(buildRecipe))
}
