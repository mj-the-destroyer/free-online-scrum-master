import { Request, Response, Router } from 'express';
import { OK } from 'http-status-codes';

// Init shared
const router = Router();

// State
let donations = 1;

/******************************************************************************
 *                      Get Donations - "GET /api/donations"
 ******************************************************************************/

router.get('/', async (req: Request, res: Response) => {
  return res.status(OK).json(donations);
});

/******************************************************************************
 *                      Donate - "POST /api/donations"
 ******************************************************************************/

router.post('/', async (req: Request, res: Response) => {
  donations++;
  return res.status(OK).json(donations);
});

/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
