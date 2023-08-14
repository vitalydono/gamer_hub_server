import express from "express";
import authController from "./auth.controllers.js";

const router = express.Router();

router.route("/login").post(authController.login);
router.route("/refreshToken").post(authController.refreshToken);
router.route("/logout").post(authController.logout);

export default router;
