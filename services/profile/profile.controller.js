import profileService from "./profile.service.js";

const createProfile = async (req, res) => {
  try {
    const profileBody = req.body;
    const userId = req.userId;
    return res
      .status(201)
      .send(await profileService.createProfile(profileBody, userId));
  } catch (error) {
    res.status(404).send({ error });
  }
};

export default { createProfile };
