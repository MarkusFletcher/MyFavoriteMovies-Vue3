import { defineStore } from "pinia"
import { ref, computed, watch } from "vue"

export const useMovieStore = defineStore('movieStore', () => {
  const movies = ref([])
  const activeTab = ref('movies')
  
  const getWathedMovies = computed(() => {
    return movies.value.filter(el => el.isWatched)
  })
  const getCountTotalMovies = computed(() => {
    return movies.value.length
  })
  const getCountWatchedMovies = computed(() => {
    return movies.value.filter(el => el.isWatched).length
  })

  const setActiveTab = (value) => {
    activeTab.value = value
  }
  const toggleWatched = (id) => {
    const idx = movies.value.findIndex(el => el.id === id)
    movies.value[idx].isWatched = !movies.value[idx].isWatched
  }
  const removeMovie = (id) => {
    movies.value = movies.value.filter(el => el.id != id)
  }
  const addMovie = (movie) => {
    movies.value.push({ ...movie, isWatched: false })
  }

  watch(movies, () => {
    localStorage.setItem('movies', JSON.stringify(movies.value))
  },
  { deep: true })

  const moviesInLocalStorage = localStorage.getItem('movies')
  if(!!moviesInLocalStorage) {    
    movies.value = JSON.parse(moviesInLocalStorage)
  }

  return {
    movies,
    activeTab,
    getWathedMovies,
    getCountTotalMovies,
    getCountWatchedMovies,
    setActiveTab,
    toggleWatched,
    removeMovie,
    addMovie
  }
})