import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLList
} from 'graphql';


import crisisType from './crisis';
import crisisModel from '../../models/crisis';

export default new GraphQLObjectType({
  name: 'Event',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    crisis_id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    number: {
      type: GraphQLString
    },
    comment: {
      type: GraphQLString
    },
    category: {
      type: GraphQLString
    },
    sub_category: {
      type: GraphQLString
    },
    crisis: {
      type: crisisType,
      resolve: (parent) => {
        return crisisModel.findById(parent.crisis_id);
      } 
    }
  })
});