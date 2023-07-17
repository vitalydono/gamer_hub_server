import Task from "../models/tasks.js";

const getAllTasks = async () => {
  const tasks = await Task.find();
  return tasks;
};

const createTask = async (taskBody) => {
  const task = await Task.create(taskBody);
  return task;
};

const getTask = async (taskId) => {
  const task = await Task.findById(taskId);
  return task;
};

const deleteTask = async (taskId) => {
  const task = await Task.findByIdAndDelete(taskId);
  return task;
};

const updateTask = async (id, taskBody) => {
  const updatedTask = await Task.findByIdAndUpdate(id, taskBody);
  return updatedTask;
};

export default { createTask, getTask, deleteTask, getAllTasks, updateTask };
