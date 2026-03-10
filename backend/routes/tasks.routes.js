import express from 'express'
const tasksRouter = express.Router();

import getTasks from '../controllers/getTasks.js'
import postTasks from '../controllers/postTasks.js'

tasksRouter.get('/tasks', getTasks);
tasksRouter.post('/post/task', postTasks);

export default tasksRouter;