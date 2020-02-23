<template>
  <div class="home">
    <div>
      <list-movies></list-movies>
    </div>
    <div>
      <new-movie></new-movie>
    </div>
  </div>
</template>

<script>
import NewMovie from '@/components/NewMovie.vue';
import ListMovies from '@/components/ListMovies.vue';

export default {
  name: 'movies',
  components: {
    ListMovies,
    NewMovie,
  },
};
</script>
