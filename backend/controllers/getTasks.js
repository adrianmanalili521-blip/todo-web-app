import Tasks from '../models/tasks.js'

async function getTasks (req, res) {
    try {
        const tasks = await Tasks();
        res.json(tasks);
    } catch (e) {
        console.log(e);
        res.status(500);
    }
}

export default getTasks;