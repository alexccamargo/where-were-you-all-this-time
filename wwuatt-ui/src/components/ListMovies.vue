<template>
  <div>
    <div>All movies</div>
    <div v-for="(movie, i) in movies" :key="i">
      <div>{{ movie.title }} - {{ (movie.genres || []).map(g => g.title).join(", ") }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { GET_MOVIES } from '../graphql-schemas/movies';

@Component({
  apollo: {
    $query: {
      loadingKey: 'loading',
    },
    movies: {
      query: GET_MOVIES,
    },
  },
})
export default class ListMovies extends Vue {
}
</script>
