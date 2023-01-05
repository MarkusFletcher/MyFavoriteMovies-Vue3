<script setup>
import { ref } from 'vue'
import { useSearchStore } from '../stores/SearchStore'

import MovieCard from './MovieCard.vue'
import VLoader from './Loader.vue'

const searchStore = useSearchStore()

const searchMovie = ref('')
</script>

<template>
  <form @submit.prevent="searchStore.getMovies(searchMovie)">
    <input class="search-input" type="text" placeholder="Input movie" v-model="searchMovie">
  </form>
  <v-loader v-if="searchStore.loader"></v-loader>
  <div class="movies" v-else>
    <movie-card v-for="movie of searchStore.movies" :key="movie.id" :movie="movie" :is-search="true"></movie-card>
  </div>
</template>

<style lang="scss">
  .search-input {
    border: 1px solid #e7e7e7;
    width: 100%;
    height: 40px;
    padding: 0 16px;
    margin-bottom: 20px;
    border-radius: 10px;
  }
</style>