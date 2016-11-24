import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

import schema from './graphql';

import eventModel from './models/event';
/*import { Root } from './graphql';*/


var app = express();

// GraphqQL server route
 app.use('/graphql', graphqlHTTP(req => ({
     schema,
     pretty: true
 })));

 // Connect mongo database

/*eventModel.find({'57e04e359a89200465255ca1', function (err, events) {
    console.log(events);
})*/

// start server
var server = app.listen(8080, () => {
    console.log('Listening at port', server.address().port);
});