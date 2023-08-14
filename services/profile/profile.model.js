import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  nickname: String,
  country: String,
  play_time: Number,
  favorite_games: Array,
  discord_user: String,
  game_mentor: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: false,
  },
});

export default mongoose.model("Profils", ProfileSchema);
