import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
});

export default mongoose.model('user', UserSchema);