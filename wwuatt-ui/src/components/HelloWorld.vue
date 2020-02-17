<template>
<div style="border: 1px solid gray; margin: auto; width: 500px;padding:16px">
  <div v-for="(movie, i) in movies" :key="i">
    <div>{{ movie.title }} - {{ (movie.genres || []).map(g => g.title).join(", ") }}</div>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import gql from 'graphql-tag';

@Component({
  apollo: {
    $query: {
      loadingKey: 'loading',
    },
    movies: gql`query {
        movies {
          title
          genres {
            title
          }
        }
      }`,
  },
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  @Prop() private age!: Number;
}
</script>
