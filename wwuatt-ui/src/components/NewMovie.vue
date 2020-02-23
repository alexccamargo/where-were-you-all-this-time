<template>
  <v-row>
    <v-col>
      <v-form>
        <v-text-field
          v-model="title"
          label="Title"
          required
          ></v-text-field>
        <div>
          <div>
            <v-select
              v-model="selectedGenres"
              :items="genres"
              chips
              attach
              multiple
              deletable-chips
              item-text="title"
              item-value="id"
              label="Genres"
            >
            </v-select>
            <v-btn @click="saveMovie()">Save</v-btn>
          </div>
        </div>
      </v-form>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import gql from 'graphql-tag';
import { getModule } from 'vuex-module-decorators';
import { ADD_MOVIE } from '../graphql-schemas/movies';
import GenreModule from '../store/genre.store';


@Component({ })
export default class NewMovie extends Vue {
  genreStore: GenreModule = getModule(GenreModule, this.$store);

  title: String = '';

  selectedGenres: Array<string> = [];

  get genres() {
    return this.genreStore.allGenres;
  }

  created() {
    this.genreStore.getGenres();
  }

  async saveMovie() {
    const newMovie = await this.$apollo.mutate({
      mutation: ADD_MOVIE,
      variables: {
        data: {
          title: this.title,
          genreIds: this.selectedGenres,
        },
      },
    });
  }
}
</script>
