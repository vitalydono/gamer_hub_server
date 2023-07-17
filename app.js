import express from "express";
import tasks from "./router/tasks.js";
import dotenv from "dotenv";
import connect from "./db/connect.js";
dotenv.config();

const app = express();

app.use(express.static("./public"));
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Task Maneger App");
});

app.use("/api/v1/tasks", tasks);

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
