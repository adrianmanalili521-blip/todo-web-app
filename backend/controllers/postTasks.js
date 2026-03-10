import InsertTask from '../models/insertTasks.js'

function PostTasks(req, res){
    InsertTask(req, res);
}

export default PostTasks;