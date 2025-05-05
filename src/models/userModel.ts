import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import db from '../config/db';
import { User } from '../types';

// Function to find a user by username
export const findUserByUsernameFromDB = async (username: string): Promise<User | undefined> => {
    try {

        const [rows] = await db.execute<RowDataPacket[]>('SELECT id, username, password, role FROM users WHERE username = ?', [username]);

        if (rows.length === 0) {
            return undefined;
        }

        const row = rows[0];
        return {
            id: row.id,
            username: row.username,
            password: row.password,
            role: row.role,
        };
    } catch (error) {
        console.error(`Error finding user "${username}" in DB:`, error);
        throw new Error('Database error occurred while finding user.');
    }
};

// Function to add a new user to the database
export const addNewUserToDB = async (user: Omit<User, 'id'>): Promise<number> => {
    try {

        const [result] = await db.execute<ResultSetHeader>(
            'INSERT INTO users (username, password, role) VALUES (?, ?, ?)',
            [user.username, user.password, user.role]
        );

        return result.insertId;
    } catch (error) {
        console.error('Error adding new user to DB:', error);

        // Check for duplicate entry error (MySQL error code 1062)
        if ((error as any).errno === 1062) {
            throw new Error('Username already exists.');
        }
        throw new Error('Database error occurred while adding user.');
    }
};

// Function to get all users
export const getAllUsersFromDB = async (): Promise<Omit<User, 'password'>[]> => {
    try {
        
        const [rows] = await db.execute<RowDataPacket[]>('SELECT id, username, role FROM users');

        const users: Omit<User, 'password'>[] = rows.map(row => ({
            id: row.id,
            username: row.username,
            role: row.role,
        }));

        return users;
    } catch (error) {
        console.error('Error fetching all users from DB:', error);
        throw new Error('Database error occurred while fetching users.');
    }
};

export const getAllUsersWithUserRole = async (): Promise<Omit<User, 'password'>[]> => {
    try {
        const [rows] = await db.execute<RowDataPacket[]>('SELECT id, username, role FROM users WHERE role = ?', ['user']);

        const users: Omit<User, 'password'>[] = rows.map(row => ({
            id: row.id,
            username: row.username,
            role: row.role,
        }));

        return users;
    } catch (error) {
        console.error('Error fetching all users with user role from DB:', error);
        throw new Error('Database error occurred while fetching users.');
    }
};
