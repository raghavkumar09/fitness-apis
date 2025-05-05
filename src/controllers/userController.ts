import { Request, Response } from 'express';
import bcrypt from 'bcryptjs'
import { addNewUserToDB, findUserByUsernameFromDB, getAllUsersWithUserRole } from '../models/userModel'; 
import { User } from '../types';

// Function Name: registerUser
export const registerUser = async (req: Request, res: Response): Promise<void> => {
    const { username, password } = req.body;

    // Basic validation
    if (!username || !password) {
        res.status(400).json({ message: 'Username and password are required.' });
        return;
    }

    try {
        // Check if username already exists in DB
        const existingUser = await findUserByUsernameFromDB(username);
        if (existingUser) {
            res.status(409).json({ message: 'Username already taken.' });
            return;
        }

        // Add user to database
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser: Omit<User, 'id'> = { username, password : hashedPassword, role: 'user' };
        const newUserId = await addNewUserToDB(newUser);

        res.status(201).json({ message: 'User registered successfully!', user: { id: newUserId, username: newUser.username, role: newUser.role } });

    } catch (error: any) {
        console.error('Error registering user:', error);
        if (error.message === 'Username already exists.') {
            res.status(409).json({ message: error.message });
        } else {
            res.status(500).json({ message: error.message || 'Failed to register user.' });
        }
    }
};

// Mock Login Handler
export const mockLogin = async (req: Request, res: Response): Promise<void> => {
    const { username, password } = req.body;

    if (!username || !password) {
        res.status(400).json({ message: 'Username and password are required.' });
        return;
    }

    try {
        const user = await findUserByUsernameFromDB(username);

        if (!user) {
            res.status(401).json({ message: 'User not available' });
            return;
        }

        const passwordMatch = user ? await bcrypt.compare(password, user.password) : false;

        if (user && passwordMatch) {
            res.status(200).json({ message: 'Login successful!', user: { id: user.id, username: user.username, role: user.role } });
        } else {
            res.status(401).json({ message: 'Invalid username or password.' });
        }
    } catch (error: any) {
        console.error('Error during login:', error);
        res.status(500).json({ message: error.message || 'An error occurred during login.' });
    }
}

// Get all users with specific role
export const getAllUsersWithRoleController = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await getAllUsersWithUserRole();
        res.status(200).json(users);
    } catch (error: any) {
        console.error('Error fetching users with user role:', error);
        res.status(500).json({ message: error.message || 'Failed to retrieve users.' });
    }
};