import { findingUserError } from "../users/users.errors.js";
import Users from "../users/users.model.js";
import Profile from "../profile/profile.model.js";

const createProfile = async (userBody, userId) => {
  const user = await Users.findById(userId);
  if (!user) {
    throw findingUserError;
  }
  const profile = new Profile(userBody);
  await profile.save();
  user.profile = profile;
  await user.save();
};

export default { createProfile };
