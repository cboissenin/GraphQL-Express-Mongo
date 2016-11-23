import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import {Types} from 'mongoose';

import crisisType from '../../types/crisis';
import getProjection from '../../get-projection';
import crisisModel from '../../../models/crisis';

export default {
  type: crisisType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve (root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);

    return crisisModel
      .findById(params.id)
      .select(projection)
      .exec();
  }
};