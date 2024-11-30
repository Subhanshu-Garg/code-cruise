import { Router } from 'express';
import { userRoutes } from '../resources/user/user.routes';
import { healthRoutes } from '../resources/health/health.routes';

const router = Router();

router.use('/users', userRoutes);
router.use('/health', healthRoutes);

export const apiRoutes = router;