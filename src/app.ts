import 'dotenv/config'
import path from 'path'
import express from 'express'
import 'express-async-errors'
import yaml from 'yamljs'
import swaggerUi from 'swagger-ui-express'

import RecipeRoutes from './routes/Recipe'
import Exception from './middlewares/Exception'

const swaggetDocument = yaml.load(path.join(__dirname, '../swagger.yaml'))

const app = express()

app.use('/api', RecipeRoutes)
app.use(Exception)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggetDocument))

export default app
