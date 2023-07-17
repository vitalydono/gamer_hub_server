import express from "express";
import tasksController from "../controllers/tasks.js";

const router = express.Router();

router.route("/").get(tasksController.getAllTasks);
router.route("/createTask").post(tasksController.createTask);
router.route("/getTask/:id").get(tasksController.getTask);
router.route("/deleteTask/:id").delete(tasksController.deleteTask);
router.route("/updateTask/:id").put(tasksController.updateTask);

export default router;
