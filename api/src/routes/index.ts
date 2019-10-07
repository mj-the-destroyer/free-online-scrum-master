import { Router } from 'express';
import UserRouter from './Users';
import PingRouter from './Ping';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users', UserRouter);
router.use('/ping', PingRouter);

// Export the base-router
export default router;
