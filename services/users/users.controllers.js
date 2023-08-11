import usersServices from "./users.service.js";

const getAllTasks = async (req, res) => {
  try {
    return res.status(201).send(await usersServices.getAllTasks());
  } catch (error) {
    res.status(404).send({ error });
  }
};

const createUser = async (req, res) => {
  try {
    const userBody = req.body;
    return res.status(201).send(await usersServices.createUser(userBody));
  } catch (error) {
    res.status(404).send({ error });
  }
};

const getTask = async (req, res) => {
  try {
    const id = req.params.id;
    return res.status(201).send(await usersServices.getTask(id));
  } catch (error) {
    res.status(404).send({ error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    return res.status(201).send(await usersServices.deleteTask(id));
  } catch (error) {
    res.status(404).send({ error });
  }
};

const updateTask = async (req, res) => {
  const id = req.params.id;
  const taskBody = req.body;

  return res.status(201).send(await usersServices.updateTask(id, taskBody));
};

export default {
  // getAllTasks,
  createUser,
  // getTask,
  // deleteTask,
  // updateTask,
};
