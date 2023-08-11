import Users from "./users.model.js";
import { hashPassword } from "./helpers.js";
import { existedUserError } from "./users.errors.js";

// const getAllTasks = async () => {
//   const tasks = await Users.find();
//   return tasks;
// };

const createUser = async (userBody) => {
  const { password, email } = userBody;
  const existedUser = await Users.findByEmail(email);
  if (existedUser) {
    throw existedUserError;
  }
  const hashedPassword = hashPassword(password);
  const userWithHash = { ...userBody, password: hashedPassword };
  const user = await Users.create(userWithHash);
  return user;
};

// const getTask = async (taskId) => {
//   const task = await Users.findById(taskId);
//   return task;
// };

// const deleteTask = async (taskId) => {
//   const task = await Users.findByIdAndDelete(taskId);
//   return task;
// };

// const updateTask = async (id, taskBody) => {
//   const updatedTask = await Users.findByIdAndUpdate(id, taskBody);
//   return updatedTask;
// };

export default { createUser };
