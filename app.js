import express from "express";
import tasks from "./router/tasks.js";

const app = express();

app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Task Maneger App");
});

app.use("/api/v1/tasks", tasks);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is listening on ${port}...`);
});
