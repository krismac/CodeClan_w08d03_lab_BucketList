const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js')

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

app.use(parser.json());

MongoClient.connect('mongodb://localhost:27017')
.then( (client) => { //after connection, client object/profile created from mongo does the following:
const db = client.db('bucketlist'); //client asks for a db
const listCollection = db.collection('list'); //on receipt of the db get the collection/table
const listRouter = createRouter(listCollection);  //on receupt use router to talk to collection - could create a new collection and route for a different type of collection e.g. board games route/collection or video games route/collection
app.use('/api/list', listRouter) //app being told to use the gamesRouter
})
.catch(console.error("error connecting to the DB"))


app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
