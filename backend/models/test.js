import connection from '../db.js';

async function testConnection() {
    try {
      const [rows] = await connection.query('SELECT * FROM todo');
      console.log('Connected successfully:', rows);
  
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  testConnection();