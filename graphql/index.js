import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema
} from 'graphql';


import GraphQLCrisis from './types/crisis';
import crisisModel from '../models/crisis';

//import mutations from './mutations';
import queries from './queries';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: 'The <Root> query object',
    fields: () => ({
      crisis: {
        type: new GraphQLList(GraphQLCrisis),
        description: 'A list of <crisis>',
        resolve: (root, params) => {
          return crisisModel.find();
        }
      }
    })
  })
});




/*
//Some Root Query
export const Root = new GraphQLObjectType({
  name: 'Query',
  description: 'The <Root> query object',
  fields: () => ({
    crisis: {
      type: new GraphQLList(GraphQLCrisis),
      description: 'A list of <crisis>',
      resolve: (root, params) => {
        return crisisModel.find();
      }
    }
  })
});
*/
