import express from "express";
import config from "config";
import { setupLogger } from "./middlewares/logging.middleware";
import { Task, TaskModel } from "./database/models/task.model";

const app = express();
setupLogger(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  const tasks: Task[] = await TaskModel.find({});
  return res.status(200).json(tasks);
})

app.post('/', async (req, res) => {
  try {
    const task = new TaskModel(req.body);
    await task.save();
    return res.status(201).json(task);
  } catch (error) {
    return res.status(404).json(error);
  }

})

export default app;
