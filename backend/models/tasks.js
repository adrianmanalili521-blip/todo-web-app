import db from '../db.js'

async function  Tasks () {
    try {
        const [rows] = await db.query(`SELECT * FROM todo`);
        return rows;
    } catch (e) {
        console.log(e);
    } 
}

export default Tasks;