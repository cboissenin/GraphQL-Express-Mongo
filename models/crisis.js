import mongoose from 'mongoose';

var crisisSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  care_id: {
    type: String
  },
  description: {
    type: String,
  }
}, { collection: 'crisis' }
);

export default mongoose.model('Crisis', crisisSchema);