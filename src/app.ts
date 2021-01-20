import express from 'express'

import routes from './routes/Recipe'

const app = express()

app.use('/api', routes)

export default app
