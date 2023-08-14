import express from "express";
import profileController from "./profile.controller.js";
import authoriztion from "../../authorization/authoriztion.actions.js";

const router = express.Router();

router
  .route("/")
  .post(authoriztion.isAuthorizedUser, profileController.createProfile);

export default router;
