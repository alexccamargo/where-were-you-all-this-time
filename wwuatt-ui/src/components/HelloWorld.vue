<template>
  <div>{{JSON.stringify(movies || {title: "nothing yet"})}}</div>
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
        }
      }`,
  },
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  @Prop() private age!: Number;
}
</script>
