import { Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'

import { getRecipes } from '../controllers/Recipe'
import CustomJoi from '../utils/CustomJoi'

const routes = Router()

routes.get('/recipes', celebrate({
  [Segments.QUERY]: {
    i: CustomJoi.stringArray().min(1).max(3),
    p: Joi.number().min(1).default(1)
  }
}), getRecipes)

export default routes
