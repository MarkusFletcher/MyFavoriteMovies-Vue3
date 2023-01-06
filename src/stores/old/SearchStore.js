import { defineStore } from "pinia"
import { useMovieStore } from "./MovieStore"

const URL = 'https://api.themoviedb.org/3/search/movie/?api_key=c8b12513915cabb63a3438c2bcb0b52a&query='

export const useSearchStore = defineStore('searchStore', {
  state: () => ({
    movies: [],
    loader: false
  }),
  actions: {
    async getMovies(query) {
      this.loader = true
      const res = await fetch(`${URL}${query}`)
      const data = await res.json()
      console.log(data)
      this.movies = data.results
      this.loader = false
    },
    addToUserMovies(movie) {
      const movieStore = useMovieStore()
      movieStore.addMovie(movie)
    }
  }
})