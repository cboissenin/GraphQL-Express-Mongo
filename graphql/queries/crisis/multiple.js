import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import crisisType from '../../types/crisis';
import getProjection from '../../get-projection';
import CrisisModel from '../../../models/crisis';

export default {
  type: new GraphQLList(crisisType),
  args: {},
  resolve (root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);

    return CrisisModel
      .find()
      .select(projection)
      .exec();
  }
};