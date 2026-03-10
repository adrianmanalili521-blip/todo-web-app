import express from 'express'
const app = express();

import cors from 'cors'

import tasksRouter from './routes/tasks.routes.js'

app.use(cors());
app.use(express.json());

app.use('/', tasksRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server is listening on http://localhost:${PORT}`);
});