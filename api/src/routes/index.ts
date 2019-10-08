import { Router } from 'express';

import UserRouter from './Users';
import DonationsRouter from './Donations';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users', UserRouter);
router.use('/donations', DonationsRouter);

// Export the base-router
export default router;
