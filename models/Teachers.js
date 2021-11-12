import mongoose from 'mongoose';
const TeachersSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },  
  lastName: {
    type: String,
  },
  gender_id: {
    type: ObjectId,
    ref: 'Gender',
  },
});
export default mongoose.models.Teachers || mongoose.model('Teachers', TeachersSchema);

