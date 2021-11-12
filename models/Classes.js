import mongoose from 'mongoose';
const ClassesSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  grade_id: {
    type: ObjectId,
    ref: 'Grade',
  },
  class_id: {
    type: ObjectId,
    ref: 'Classes',
  },
  teacher_id: {
    type: ObjectId,
    ref: 'Teachers',
  },
});
export default mongoose.models.Classes || mongoose.model('Classes', ClassesSchema);

