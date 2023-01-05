<script setup>
import { useMovieStore } from '../stores/MovieStore'
import { useSearchStore } from '../stores/SearchStore'

const movieStore = useMovieStore()
const searchStore = useSearchStore()

const props = defineProps({
  movie: {
    type: Object,
    required: true,
    default: {}
  },
  isSearch: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="movie">
    <img class="movie-img" :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`" :alt="movie.original_title">
    <div class="movie-description">
      <div class="movie-head heading-3">
        <div class="movie-name">
          {{ movie.original_title }}
        </div>
        <div class="movie-release-date">
          {{ movie.release_date }}
        </div>
      </div>
      <span class="movie-overview">{{ movie.overview }}</span>
      <div class="movie-buttons">
        <template v-if="!isSearch">
          <button class="btn movie-buttons-watched" @click="movieStore.toggleWatched(movie.id)">
            <span v-if="!movie.isWatched">Watched</span>
            <span v-else>Unwatched</span>
          </button>
          <button class="btn movie-buttons-delete" @click="movieStore.removeMovie(movie.id)">Delete</button>
        </template>
        <template v-else>
          <button class="btn btn_blue" @click="searchStore.addToUserMovies(movie)">Add</button>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .movie {
  display: grid;
  grid-template-columns: 133px 1fr;
  column-gap: 20px;
  margin-bottom: 20px;
  border: 2px solid #efefef;
  border-radius: 10px;
  overflow: hidden;
  &-description {
    padding: 20px 10px;
  }
  &-accept {
    margin-right: 10px;
  }
  &-img {
    width: 133px;
    height: 100%;
    object-fit: cover;
  }
  &-name {
    font-size: 20px;
    margin-bottom: 10px;
  }
  &-release-date {
    font-size: 14px;
  }
  &-overview {
    display: block;
    margin-bottom: 20px;
  }
  &-buttons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    &-watched {
      color: #fff;
      background: #1eb4c3;
    }
    &-watched__icon {
      width: 15px;
      margin-left: 10px;
    }
    &-delete {
      color: #fff;
      background: #ff2a2a;
    }
  }
}
</style>