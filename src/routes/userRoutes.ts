import { Router } from 'express';
import { registerUser, mockLogin, getAllUsersWithRoleController } from '../controllers/userController';

const router = Router();

router.post('/register', registerUser);

router.post('/login', mockLogin);

router.get('/user', getAllUsersWithRoleController)


export default router;