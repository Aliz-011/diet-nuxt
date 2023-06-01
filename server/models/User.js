import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    sex: String,
    weight: Number,
    height: Number,
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
export default User;
