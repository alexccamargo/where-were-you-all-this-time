import gql from 'graphql-tag';

export const GET_GENRES = gql`query {
  genres {
    title
    id
  }
}`;

export const GET_GENRES_BY_ID = gql`query getGenreById($id: String!){
  genre(id: $id) {
    title
    id
  }
}`;

export const ADD_GENRE = gql`mutation addGenre($data: AddGenreInput!){
  addGenre(data: $addGenreInput) {
    title
    id
  }
}`;
