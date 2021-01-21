import request from 'supertest'

import app from '../../src/app'
import * as RecipeService from '../../src/services/Recipe'
import * as GiphyService from '../../src/services/Giphy'
import recipes from '../mocks/recipes'
import recipePuppy from '../mocks/recipe-puppy'

describe('Recipe controller', () => {
  describe('GET /recipes endpoint', () => {
    it('should return status code 200 and a list of recipes', async () => {
      jest.spyOn(RecipeService, 'getRecipes').mockResolvedValueOnce(recipes)

      const expected = {
        keywords: ['onions', 'tomato'],
        recipes
      }

      const { status, body } = await request(app)
        .get('/api/recipes')
        .query({
          i: 'onions,tomato'
        })

      expect(status).toBe(200)
      expect(body).toEqual(expected)
    })

    it('should return status code 400 if no ingredient is sent', async () => {
      const { status, body } = await request(app)
        .get('/api/recipes')
        .query({
          i: ''
        })

      expect(status).toBe(400)
      expect(body.error).toBe('"i" must contain at least 1 items')
    })

    it('should return status code 400 if more than 3 ingredients are sent', async () => {
      const { status, body } = await request(app)
        .get('/api/recipes')
        .query({
          i: 'onions,tomato,bacon,flour'
        })

      expect(status).toBe(400)
      expect(body.error).toBe('"i" must contain less than or equal to 3 items')
    })

    it('should return status code 500 if the Recipe Puppy service throws an error', async () => {
      jest.spyOn(RecipeService.client, 'get').mockRejectedValueOnce({})

      const { status, body } = await request(app)
        .get('/api/recipes')
        .query({
          i: 'onions,tomato'
        })

      expect(status).toBe(500)
      expect(body.error).toBe('Internal server error')
    })

    it('should return status code 500 if the GIPHY service throws an error', async () => {
      jest.spyOn(RecipeService.client, 'get').mockResolvedValueOnce({ data: recipePuppy })
      jest.spyOn(GiphyService.client, 'get').mockRejectedValueOnce({})

      const { status, body } = await request(app)
        .get('/api/recipes')
        .query({
          i: 'onions,tomato'
        })

      expect(status).toBe(500)
      expect(body.error).toBe('Internal server error')
    })
  })
})
