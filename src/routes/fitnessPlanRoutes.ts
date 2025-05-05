import { Router } from 'express';
import { getFitnessPlans } from '../controllers/fitnessPlanController';

const router = Router();

// GET /fitness-plans
router.get('/', getFitnessPlans);

export default router;