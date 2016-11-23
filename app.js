import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

import schema from './graphql';

/*import crisisModel from './models/crisis';
import { Root } from './graphql';*/


var app = express();

// GraphqQL server route
 app.use('/graphql', graphqlHTTP(req => ({
     schema,
     pretty: true
 })));

 // Connect mongo database


/*crisisModel.findById('57dfec699a892004311844dd', function (err, crisis) {
    console.log(crisis._id);
})*/

// start server
var server = app.listen(8080, () => {
    console.log('Listening at port', server.address().port);
});