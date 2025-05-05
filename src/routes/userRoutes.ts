import { Router } from 'express';
import { registerUser, mockLogin, getAllUsersController } from '../controllers/userController';

const router = Router();

router.post('/register', registerUser);

router.post('/login', mockLogin);

router.get('/', getAllUsersController);


export default router;