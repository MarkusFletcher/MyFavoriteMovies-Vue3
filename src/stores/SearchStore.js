import { defineStore } from "pinia"
import { ref } from "vue"
import { useMovieStore } from "./MovieStore"

const URL = 'https://api.themoviedb.org/3/search/movie/?api_key=c8b12513915cabb63a3438c2bcb0b52a&query='

export const useSearchStore = defineStore('searchStore', () => {
  const movies = ref([])
  const loader = ref(false)
  const getMovies = async (query) => {
    loader.value = true
    const res = await fetch(`${URL}${query}`)
    const data = await res.json()
    console.log(data)
    movies.value = data.results
    loader.value = false
  }
  const addToUserMovies = (movie) => {
    const movieStore = useMovieStore()
    movieStore.addMovie(movie)
  }

  return {
    loader,
    movies,
    getMovies,
    addToUserMovies
  }
})