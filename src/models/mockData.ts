import { User } from '../types';

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