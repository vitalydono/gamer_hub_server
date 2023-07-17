import tasksServices from "../services/tasks.js";

const getAllTasks = async (req, res) => {
  try {
    return res.status(201).send(await tasksServices.getAllTasks());
  } catch (error) {
    res.status(404).send({ error });
  }
};

const createTask = async (req, res) => {
  try {
    const taskBody = req.body;
    return res.status(201).send(await tasksServices.createTask(taskBody));
  } catch (error) {
    res.status(404).send({ error });
  }
};

const getTask = async (req, res) => {
  try {
    const id = req.params.id;
    return res.status(201).send(await tasksServices.getTask(id));
  } catch (error) {
    res.status(404).send({ error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    return res.status(201).send(await tasksServices.deleteTask(id));
  } catch (error) {
    res.status(404).send({ error });
  }
};

const updateTask = async (req, res) => {
  const id = req.params.id;
  const taskBody = req.body;

  return res.status(201).send(await tasksServices.updateTask(id, taskBody));
};

export default {
  getAllTasks,
  createTask,
  getTask,
  deleteTask,
  updateTask,
};
