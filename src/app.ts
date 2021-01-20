import 'dotenv/config'
import express from 'express'
import 'express-async-errors'

import RecipeRoutes from './routes/Recipe'
import Exception from './middlewares/Exception'

const app = express()

app.use('/api', RecipeRoutes)
app.use(Exception)

export default app
