import { Request, Response } from 'express';
import { getFitnessPlansFromDB } from '../models/fitnessPlanModel';

// Function Name: getFitnessPlans
export const getFitnessPlans = async (req: Request, res: Response): Promise<void> => {
  try {

    const fitnessPlans = await getFitnessPlansFromDB();

    res.status(200).json(fitnessPlans);
  } catch (error) {
    console.error('Error fetching fitness plans:', error);
    res.status(500).json({ message: error instanceof Error ? error.message : 'Failed to retrieve fitness plans.' });
  }
};