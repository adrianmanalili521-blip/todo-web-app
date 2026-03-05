import mysql2 from 'mysql2/promise'

const pool = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    database: 'todo_database'
});

export default pool