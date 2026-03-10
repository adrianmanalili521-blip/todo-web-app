import db from '../db.js'

async function InsertTask(req, res){
    const { todo } = req.body;
    try {
        const sql = 
            `INSERT INTO todo (task) values (?)`;
        
        const [result] = await db.query(sql, [todo]);   
        if (!result){
            res.status(500).json({message: "POST failed"});
        } else {
            res.status(201).json({message: "POST successful"});
        }
    } catch (e) {
        console.log(e);
    }
}

export default InsertTask;