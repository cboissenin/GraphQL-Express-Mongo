import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'CrisisInput',
  fields: {
    _id: {type: GraphQLID},
    care_id: {type: GraphQLString},
    name: {type: GraphQLString},
    description: {type: GraphQLString}
  }
});