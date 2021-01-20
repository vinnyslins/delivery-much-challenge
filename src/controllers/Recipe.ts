import { Request, Response } from 'express'

export const getRecipes = (req: Request, res: Response) => {
  return res.send('Hello, Delivery Much!!!')
}
