import mongoose from 'mongoose';

const GenderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
});

export default mongoose.models.Gender || mongoose.model('Gender', GenderSchema);

