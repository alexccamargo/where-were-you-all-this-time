import admin from "firebase-admin";
import { https } from "firebase-functions";
import express from "express";
import { ApolloServer, gql } from "apollo-server-express";


admin.initializeApp();

// const credentials = require('../../../firebase-credential.json');
// const env = require('../../../env.json');

// admin.initializeApp({
//   credential: admin.credential.cert(credentials),
//   databaseURL: env.databaseUrl
// });

const typeDefs = gql`
  type Movie {
    title: String
    imdb: String
  }
  type Query {
    movies: [Movie]
  }
`;

const resolvers = {
    Query: {
      movies: () =>
        admin
          .database()
          .ref("movies")
          .once("value")
          .then((snap: { val: () => any; }) => snap.val())
          .then(((val: { [x: string]: any; }) => Object.keys(val).map(key => val[key])))
    }
  };

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: "/", cors: true });
exports.graphql = https.onRequest(app);
