import * as RecipeService from '../../src/services/Recipe'
import * as GiphyService from '../../src/services/Giphy'
import RecipePuppy from '../mocks/RecipePuppy'
import Recipes from '../mocks/Recipes'

describe('Recipe services', () => {
  beforeAll(() => {
    jest.spyOn(GiphyService, 'getGif').mockResolvedValue('https://giphy.com/gifs/xyz')
  })

  describe('buildRecipe function', () => {
    it('should build the recipe object', async () => {
      const recipe = {
        title: 'Basil Pesto Pomodoro Sauce',
        href: 'http://www.recipezaar.com/Basil-Pesto-Pomodoro-Sauce-221792',
        ingredients: 'pesto, nonstick cooking spray, tomato, onions',
        thumbnail: 'http://img.recipepuppy.com/148477.jpg'
      }

      const expected = {
        title: 'Basil Pesto Pomodoro Sauce',
        ingredients: ['pesto', 'nonstick cooking spray', 'tomato', 'onions'],
        link: 'http://www.recipezaar.com/Basil-Pesto-Pomodoro-Sauce-221792',
        gif: 'https://giphy.com/gifs/xyz'
      }

      await expect(RecipeService.buildRecipe(recipe)).resolves.toEqual(expected)
    })
  })

  describe('getRecipes function', () => {
    it('should fetch recipes with the respective gifs', async () => {
      jest.spyOn(RecipeService.client, 'get').mockResolvedValue({ data: RecipePuppy })

      const ingredients = ['onions', 'tomato']

      await expect(RecipeService.getRecipes(ingredients, 1)).resolves.toEqual(Recipes)
    })
  })
})
