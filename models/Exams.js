import mongoose from 'mongoose';
const ExamsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  eDate: {
    type: Date,
  },
  schedule_id: {
    type: ObjectId,
    ref: 'Schedules',
  },
});
export default mongoose.models.Exams || mongoose.model('Exams', ExamsSchema);

