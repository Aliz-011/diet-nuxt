import mongoose from 'mongoose';

const historySchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    exercises: [
      {
        name: String,
      },
      {
        reps: Number,
      },
      {
        sets: Number,
      },
    ],
  },
  { timestamps: true }
);

const History = mongoose.model('History', historySchema);
export default History;
