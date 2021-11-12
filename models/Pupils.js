import mongoose from 'mongoose';

const PupilsSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  gender_id: {
    type: ObjectId,
    ref: 'Gender',
  },
  class_id: {
    type: ObjectId,
    ref: 'Classes',
  },
  birthday: {
    type: Date,
  },
});

export default mongoose.models.Pupils || mongoose.model('Pupils', PupilsSchema);

