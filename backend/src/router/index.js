import { Router } from 'express';
import users from './users.js';

import { authController } from '../controllers/auth.js';

const router = Router()
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

router.use('/users', users);

export default router;
