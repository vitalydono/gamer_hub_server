import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  nickname: String,
  country: String,
  play_time: Number,
  favorite_games: Array,
  discord_user: String,
  game_mentor: String,
});

export default mongoose.model("Profils", ProfileSchema);
