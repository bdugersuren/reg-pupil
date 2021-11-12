import mongoose from 'mongoose';

const GradeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
});

export default mongoose.models.Grade || mongoose.model('Grade', GradeSchema);

