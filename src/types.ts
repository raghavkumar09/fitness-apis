export interface User {
    id: number;
    username: string;
    password: string;
    role: 'user' | 'coach';
}

export interface FitnessPlan {
    id: number;
    title: string;
    description: string;
    type: string;
}