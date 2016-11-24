import {
  GraphQLList,
} from 'graphql';

import eventType from '../../types/event';
import eventModel from '../../../models/event';

export default {
  type: new GraphQLList(eventType),
  args: {},
  resolve (root, params, options) {
    return eventModel
      .find()
  }
};