import { Router } from 'express';

import DonationsRouter from './donations';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/donations', DonationsRouter);

// Export the base-router
export default router;
