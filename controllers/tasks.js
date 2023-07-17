const getAllTasks = (req, res) => {
  res.send("All items");
};

const createTask = (req, res) => {
  const taskBody = req.body;
  res.send(taskBody);
};

const getTask = (req, res) => {
  const id = req.params.id;
  res.send({ id });
};

const deleteTask = (req, res) => {
  const id = req.params.id;
  res.send({ id });
};

const updateTask = (req, res) => {
  const id = req.params.id;
  res.send({ id });
};

export default {
  getAllTasks,
  createTask,
  getTask,
  deleteTask,
  updateTask,
};
