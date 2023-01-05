<script setup>
import { useMovieStore } from './stores/MovieStore'
import MovieCard from './components/MovieCard.vue'
import VSearch from './components/Search.vue'

const movieStore = useMovieStore()

const setTab = (value) => {
  movieStore.setActiveTab(value)
} 
</script>

<template>
  <main>
    <header class="header">
      <img src="/logo.svg" alt="" class="header-logo">
      <div class="header-title">My Favorite Movies</div>
    </header>
    <div class="tabs">
      <button class="btn" :class="[{btn_blue: movieStore.activeTab == 'movies'}]" @click="setTab('movies')">Favorite</button>
      <button class="btn" :class="[{btn_blue: movieStore.activeTab == 'search'}]" @click="setTab('search')">Search</button>
    </div>
    <div class="movies" v-if="movieStore.activeTab === 'movies'">
      <h2 class="heading-2" v-if="movieStore.getCountWatchedMovies">Watched Movies ({{ movieStore.getCountWatchedMovies }})</h2>
      <movie-card v-for="movie of movieStore.getWathedMovies" :key="movie.id" :movie="movie"></movie-card>
      <h2 class="heading-2">All Movies ({{ movieStore.getCountTotalMovies }})</h2>
      <movie-card v-for="movie of movieStore.movies" :key="movie.id" :movie="movie"></movie-card>
    </div>
    <div class="search" v-if="movieStore.activeTab === 'search'">
      <v-search></v-search>
    </div>
  </main>
</template>

<style lang="scss">
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  &-logo {
    max-width: 50px;
    margin-right: 10px;
  }

  &-title {
    font-size: 20px;
  }
}
.btn {
  border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  background: #efefef;

  &:hover {
    opacity: 0.7;
  }
  &_blue {
    background: #1eb4c3;
    color: #fff;
  }
}
.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>
