import { Router } from 'express';
import { signupPost } from '../controllers/signup';

const router = Router();

router.post('/', signupPost);

export default router;