import { defineStore } from "pinia"

export const useMovieStore = defineStore('movieStore', {
  state: () => ({
    movies: [],
    activeTab: 'search'
  }),
  getters: {
    getWathedMovies() {
      return this.movies.filter(el => el.isWatched)
    },
    getCountTotalMovies() {
      return this.movies.length
    },
    getCountWatchedMovies() {
      return this.movies.filter(el => el.isWatched).length
    }
  },
  actions: {
    setActiveTab(value) {
      this.activeTab = value
    },
    toggleWatched(id) {
      const idx = this.movies.findIndex(el => el.id === id)
      this.movies[idx].isWatched = !this.movies[idx].isWatched
    },
    removeMovie(id) {
      this.movies = this.movies.filter(el => el.id != id)
    },
    addMovie(movie) {
      this.movies.push({ ...movie, isWatched: false })
    }
  }
})