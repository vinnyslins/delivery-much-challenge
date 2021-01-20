import { Request, Response } from 'express'

import Recipe from '../models/Recipe'
import * as RecipeService from '../services/Recipe'

interface RecipeQuery {
  i: string[]
  p: number
}

interface RecipeResponse {
  keywords: string[]
  recipes: Recipe[]
}

export const getRecipes = async (req: Request, res: Response<RecipeResponse>) => {
  const { i: ingredients, p: page } = req.query as unknown as RecipeQuery

  const recipes = await RecipeService.getRecipes(ingredients, page)

  return res.json({ keywords: ingredients, recipes })
}
