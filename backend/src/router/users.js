import { Router } from 'express';
const router = Router();
import { authController } from '../controllers/auth.js';
import { auth } from '../utils/auth.js';

router.get('/profile', auth(),authController.getProfileInfo);
router.put('/profile', auth(),authController.editProfileInfo);

export default router