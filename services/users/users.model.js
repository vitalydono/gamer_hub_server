import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  mobile_number: Number,
  password: String,
  profile: {
    type: mongoose.Schema.Types,
    ref: "Profile",
    required: false,
  },
});

UserSchema.statics.findByEmail = function (email) {
  return this.findOne({ email });
};

export default mongoose.model("Users", UserSchema);
