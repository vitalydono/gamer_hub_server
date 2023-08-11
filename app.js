import express from "express";
import users from "./services/users/users.router.js";
import auth from "./services/auth/auth.router.js";

import dotenv from "dotenv";
import connect from "./db/connect.js";
dotenv.config();

const app = express();

app.use(express.static("./public"));
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Task Maneger App");
});

app.use("/api/v1/users", users);
app.use("/api/v1/auth", auth);

const start = async () => {
  try {
    await connect();
    app.listen(process.env.PORT, () => {
      connect();
      console.log(
        `Server is listening on ${process.env.PORT}... and connect to mongoDB`
      );
    });
  } catch (error) {
    console.log({ error });
  }
};

start();
