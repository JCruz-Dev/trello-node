import { Router } from 'express';
import { loginForm, registerForm } from '../controllers/userController';

const router = Router();

router.post('/auth/login', loginForm);
router.post('/auth/register', registerForm);

export default router;
