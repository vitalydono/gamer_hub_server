import express from "express";
import usersController from "./users.controllers.js";

const router = express.Router();

// router.route("/").get(usersController.getAllTasks);
router.route("/").post(usersController.createUser);
// router.route("/getUser/:id").get(usersController.getTask);
// router.route("/deleteUser/:id").delete(usersController.deleteTask);

export default router;
