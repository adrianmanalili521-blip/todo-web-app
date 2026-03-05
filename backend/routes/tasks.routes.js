import express from 'express'
const tasksRouter = express.Router();
import getTasks from '../controllers/getTasks.js'

tasksRouter.get('/tasks', getTasks);

export default tasksRouter;