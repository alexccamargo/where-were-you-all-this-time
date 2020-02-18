import "reflect-metadata";
import { https } from "firebase-functions";
import express from "express";
import { ApolloServer } from "apollo-server-express";

import { buildSchema } from "type-graphql";
import { Container } from "typedi";

import { MovieResolver } from "./resolver/movie.resolver";

import admin from "firebase-admin";
import { GenreResolver } from "./resolver/genre.resolver";

function initDb (env: String) {
  if(env === 'PROD') {
    admin.initializeApp();
  } else {
    const credentials = require('../../../../wwuatt-config/firebase-credential.json');
    const devConfig = require('../../../../wwuatt-config/env.json');
    
    admin.initializeApp({
        credential: admin.credential.cert(credentials),
        databaseURL: devConfig.databaseUrl
    });
  }

};

initDb(process.env.ENV_NAME || 'PROD');

const app = express();

exports.graphql = https.onRequest(app);

async function bootstrap() {

  const schema = await buildSchema({
    resolvers: [MovieResolver, GenreResolver],
    container: Container,
  });

  const server = new ApolloServer({
    schema,
  });

  server.applyMiddleware({ app, path: "/", cors: true });
}

bootstrap().catch(reason => console.log(reason));
