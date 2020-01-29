import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
const dbMovies = db.collection('movies')

// const credentials = require('../firebase-credential.json');
// const env = require('../env.json');
// admin.initializeApp({
//   credential: admin.credential.cert(credentials),
//   databaseURL: env.databaseURL
// });
// const db = admin.firestore();

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
export const movies = functions.https.onRequest((request, response) => {
    switch(request.method) {
        case "GET": 
            getAllMovies(request, response);
            break;
        case "POST":
            saveMovie(request, response);
            break;
        default:
            response.status(403).send('Forbidden!');
    }
});

function getAllMovies(request: functions.https.Request, response: functions.Response) {
    const results: any = [];
    dbMovies.get().then((snapshot) => {
        snapshot.forEach((doc) => results.push(doc.data()));
        response.send(results);
    }).catch(reason => {
        response.status(500).send(reason)
    })
}

function saveMovie(request: functions.https.Request, response: functions.Response) {
    const movie = request.body;
    dbMovies.add(movie)
    .then((doc) => {
        dbMovies.doc(doc.id).get().then(snapshot => {
            response.send(snapshot.data())
        }).catch(reason => {
            response.status(500).send(reason)
        });
    }).catch(reason => {
        response.status(500).send(reason)
    });
}
