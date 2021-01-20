import axios from 'axios'

import Recipe from '../models/Recipe'
import RecipePuppy from './models/RecipePuppy'

const client = axios.create({
  baseURL: process.env.RECIPE_PUPPY_URL
})

export const getRecipes = async (ingredients: string[], page: number): Promise<Recipe[]> => {
  const { data } = await client.get<RecipePuppy>('/api', {
    params: {
      i: ingredients.join(','),
      p: page
    }
  })

  return data.results.map(recipe => ({
    title: recipe.title,
    ingredients: recipe.ingredients.split(', '),
    link: recipe.href,
    gif: recipe.thumbnail
  }))
}
