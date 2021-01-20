import { Router } from 'express'

import { getRecipes } from '../controllers/Recipe'

const routes = Router()

routes.get('/recipes', getRecipes)

export default routes
