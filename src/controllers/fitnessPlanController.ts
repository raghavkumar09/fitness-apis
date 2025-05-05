import { Request, Response } from 'express';
import { mockFitnessPlans } from '../models/mockData';

// Function Name: getFitnessPlans
export const getFitnessPlans = (req: Request, res: Response): void => {
    try {
        // Simulate database query by returning mock data
        const fitnessPlans = mockFitnessPlans;

        res.status(200).json(fitnessPlans);
    } catch (error) {
        console.error('Error fetching fitness plans:', error);
        res.status(500).json({ message: 'Failed to retrieve fitness plans.' });
    }
};