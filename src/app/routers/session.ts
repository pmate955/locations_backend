import * as sessions from '../controllers/session';
import { Router } from 'express';

export const router: Router = Router({ mergeParams: true });

router.post('/', sessions.create);


