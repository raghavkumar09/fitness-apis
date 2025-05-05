import { RowDataPacket } from 'mysql2/promise';
import db from '../config/db';
import { FitnessPlan } from '../types';

// Function to fetch all fitness plans
export const getFitnessPlansFromDB = async (): Promise<FitnessPlan[]> => {
    try {

        const [rows] = await db.execute<RowDataPacket[]>('SELECT id, title, description, type FROM fitness_plans');

        // Cast the results to the FitnessPlan type
        const fitnessPlans: FitnessPlan[] = rows.map(row => ({
            id: row.id,
            title: row.title,
            description: row.description,
            type: row.type,
        }));

        return fitnessPlans;
    } catch (error) {
        console.error('Error fetching fitness plans from DB:', error);
        throw new Error('Database error occurred while fetching fitness plans.');
    }
};
