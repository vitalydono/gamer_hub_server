import express from "express";
import postController from "./post.controller.js";
import authoriztion from "../../authorization/authoriztion.actions.js";

const router = express.Router();

router
  .route("/")
  .post(authoriztion.isAuthorizedUser, postController.createPost);

export default router;
