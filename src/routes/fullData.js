import { Router } from 'express';
import { fullDataPost } from '../controllers/fullData';

const router = Router();

router.post('/', fullDataPost);

export default router;