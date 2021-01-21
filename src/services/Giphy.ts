import axios from 'axios'

export const client = axios.create({
  baseURL: process.env.GIPHY_URL,
  params: {
    api_key: process.env.GIPHY_KEY
  }
})

export const getGif = async (query: string) => {
  const { data: { data } } = await client.get('/gifs/search', {
    params: {
      q: query,
      limit: 1
    }
  })

  return data[0]?.url
}
