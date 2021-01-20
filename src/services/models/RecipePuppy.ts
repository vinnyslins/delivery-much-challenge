interface Recipe {
  title: string
  href: string
  ingredients: string
  thumbnail: string
}

export default interface RecipePuppy {
  title: string
  version: number
  href: string
  results: Recipe[]
}
