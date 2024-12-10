const router = require('express').Router();
import users from './users';
import themes from './themes';
import posts from './posts';
import likes from './likes';
import test from './test';
import { authController } from '../controllers';

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

router.use('/users', users);
router.use('/themes', themes);
router.use('/posts', posts);
router.use('/likes', likes);
router.use('/test', test);

export default router;
