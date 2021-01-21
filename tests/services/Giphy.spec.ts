import * as GiphyService from '../../src/services/Giphy'
import giphy from '../mocks/giphy'

describe('Giphy service', () => {
  describe('getGif function', () => {
    it('should return the URL of a GIF given a query', async () => {
      jest.spyOn(GiphyService.client, 'get').mockResolvedValueOnce({ data: giphy })

      const expected = 'https://giphy.com/gifs/chicken-soup-FzSSjwGEmz2Ok'
      await expect(GiphyService.getGif('Chicken stroganoff')).resolves.toBe(expected)
    })

    it('should return undefined if the service finds no GIF', async () => {
      jest.spyOn(GiphyService.client, 'get').mockResolvedValueOnce({ data: { data: [] } })

      await expect(GiphyService.getGif('Chicken stroganoff')).resolves.toBeUndefined()
    })
  })
})
