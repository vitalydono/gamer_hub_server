import express from "express";
import authController from "./auth.controllers.js";

const router = express.Router();

router.route("/login").post(authController.login);

export default router;
