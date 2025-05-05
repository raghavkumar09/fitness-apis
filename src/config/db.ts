import mysql, { Pool } from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

let pool: Pool;

try {
    // Create the connection pool
    pool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        port: parseInt(process.env.DB_PORT || '3306', 10)
    });

    console.log('MySQL connection pool created.');

    // Test the connection
    pool.getConnection()
        .then(connection => {
            console.log('Successfully connected to MySQL database.');
            connection.release();
        })
        .catch(err => {
            console.error('Failed to connect to MySQL database:', err);
            process.exit(1);
        });

} catch (error) {
    console.error('Error creating MySQL connection pool:', error);
    throw error;
}


export default pool;