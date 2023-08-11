import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  mobile_number: Number,
  password: String,
});

UserSchema.statics.findByEmail = function (email) {
  return this.findOne({ email });
};

export default mongoose.model("Users", UserSchema);
