import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import crisistInputType from '../../types/crisis-input';
import CrisisModel from '../../../models/crisis';

export default {
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(crisistInputType)
    }
  },
   resolve (root, params, options) {
    const crisisModel = new CrisisModel(params.data);

    return new Promise((resolve, reject) => {
      crisisModel.save((err, res) => {
       err ? reject(err): resolve(res);
      });
    });

  }
};