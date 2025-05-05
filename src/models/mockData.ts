import { FitnessPlan, User } from '../types';

// Simulate a database table for fitness plans
export const mockFitnessPlans: FitnessPlan[] = [
    { id: 1, title: 'Morning Cardio Blast', description: '30 minutes of high-intensity cardio.', type: 'cardio' },
    { id: 2, title: 'Full Body Strength', description: 'Compound exercises targeting all major muscle groups.', type: 'strength' },
    { id: 3, title: 'Yoga for Flexibility', description: 'Gentle yoga poses to improve flexibility.', type: 'flexibility' },
    { id: 4, title: 'HIIT Quickie', description: 'Short, intense interval training.', type: 'cardio' },
];

// Mock data for User 
export const mockUsers: User[] = [
    { id: 1, username: 'rohan', password: 'password1'},
    { id: 2, username: 'mohan', password: 'coachpassword'},
];

// Start with mock users
const registeredUsers: User[] = [...mockUsers];

export const addNewUser = (user: Omit<User, 'id'>): User => {
    const newUser: User = {
        id: registeredUsers.length + 1,
        ...user,
    };
    registeredUsers.push(newUser);
    console.log('New user registered:', newUser);
    return newUser;
};

export const findUserByUsername = (username: string): User | undefined => {
    return registeredUsers.find(user => user.username === username);
};

export const getAllUsers = (): User[] => {
    return registeredUsers;
}