import { Request, Response } from 'express';
import { addNewUser, findUserByUsername, getAllUsers } from '../models/mockData';
import { User } from '../types';

// Function Name: registerUser
export const registerUser = (req: Request, res: Response): void => {
    const { username, password } = req.body;

    // Basic validation
    if (!username || !password) {
        res.status(400).json({ message: 'Username and password are required.' });
        return;
    }

    // Simulate checking if username already exists
    if (findUserByUsername(username)) {
        res.status(409).json({ message: 'Username already taken.' });
        return;
    }

    try {
        const newUser: Omit<User, 'id'> = { username, password };
        addNewUser(newUser);

        res.status(201).json({ message: 'User registered successfully!', user: { username: newUser.username } });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Failed to register user.' });
    }
};

export const mockLogin = (req: Request, res: Response): void => {
    const { username, password } = req.body;

    if (!username || !password) {
        res.status(400).json({ message: 'Username and password are required.' });
        return;
    }

    const user = findUserByUsername(username);

    if (user && user.password === password) {
        res.status(200).json({ message: 'Login successful!', user: { id: user.id, username: user.username } });
    } else {
        res.status(401).json({ message: 'Invalid credentials.' });
    }
}

export const getAllUsersController = (req: Request, res: Response): void => {
    try {
        const users = getAllUsers();
        // Return sensitive data like password
        const safeUsers = users.map(({ id, username }) => ({ id, username }));
        res.status(200).json(safeUsers);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Failed to retrieve users.' });
    }
};