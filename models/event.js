import mongoose from 'mongoose';

var eventSchema = new mongoose.Schema({
    number: {
      type: String,
    },
    comment: {
      type: String,
    },
    category: {
      type: String
    },
    crisis_id: [{type: mongoose.Schema.Types.ObjectId, ref: 'Crisis'}],
    category: {
      type: String
    },
    sub_category: {
      type: String,
    }
  }, { collection: 'event' }
);

export default mongoose.model('Event', eventSchema);