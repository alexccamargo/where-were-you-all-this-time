import gql from 'graphql-tag';

export const GET_MOVIES = gql`query {
  movies {
    title
    genres {
      title
    }
  }
}`;

export const ADD_MOVIE = gql`mutation addMovie($data: AddMovieInput!){
  addMovie(data: $data) {
    title
  }
}`;

export interface AddMovieInput {
  title: string;
  genreIds: Array<string>;
}
