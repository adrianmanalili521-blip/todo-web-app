import Tasks from '../models/tasks.js'

async function getTasks (req, res) {
    try {
        const tasks = await Tasks();
        if (!tasks){
            res.status(500).json({message : "failed to get tasks"});
        } else{
            res.status(200).json({message : "Successful getting tasks", task : tasks});
        }
    } catch (e) {
        console.log(e);
        res.status(500).send({error : e});
    }
}

export default getTasks;