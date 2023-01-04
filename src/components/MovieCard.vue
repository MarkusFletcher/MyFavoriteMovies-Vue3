<script setup>
import { useMovieStore } from '../stores/MovieStore'

const movieStore = useMovieStore()

const props = defineProps({
  movie: {
    type: Object,
    required: true,
    default: {}
  }
})
</script>

<template>
  <div class="movie">
    <img class="movie-img" :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`" :alt="movie.original_title">
    <div class="movie-description">
      <div class="movie-name heading-3">
        {{ movie.original_title }} ({{ movie.release_date }})
      </div>
      <span class="movie-overview">{{ movie.overview }}</span>
      <div class="movie-buttons">
        <button class="btn movie-buttons-watched" @click="movieStore.toggleWatched(movie.id)">
          <span v-if="!movie.isWatched">Watched</span>
          <span v-else >Unwatched</span>
        </button>
        <button class="btn movie-buttons-delete" @click="movieStore.removeMovie(movie.id)">Delete</button>
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
    display: flex;
    align-items: center;
    font-size: 20px;
    margin-bottom: 20px;
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