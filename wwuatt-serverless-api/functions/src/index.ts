import "reflect-metadata";
import { https } from "firebase-functions";
import express from "express";
import { ApolloServer } from "apollo-server-express";

import { buildSchema } from "type-graphql";
import { MovieResolver } from "./resolver/movie.resolver";

import admin from "firebase-admin";

function initDb () {
  admin.initializeApp();
              
  // const credentials = require('../../../firebase-credential.json');
  // const env = require('../../../env.json');
  
  // admin.initializeApp({
  //     credential: admin.credential.cert(credentials),
  //     databaseURL: env.databaseUrl
  // });
};

initDb();

const app = express();

exports.graphql = https.onRequest(app);

async function bootstrap(){
  
  const schema = await buildSchema({
    resolvers: [MovieResolver]
  });

  const server = new ApolloServer({
    schema,
  });

  server.applyMiddleware({ app, path: "/", cors: false });
} 

bootstrap().catch(reason => console.log(reason));
