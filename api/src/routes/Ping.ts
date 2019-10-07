import { Request, Response, Router } from 'express';
import { OK } from 'http-status-codes';

// Init shared
const router = Router();

/******************************************************************************
 *                      Get All Users - "GET /api/users/all"
 ******************************************************************************/

router.get('/', async (req: Request, res: Response) => {
  return res.status(OK).json('Pong!');
});

/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
