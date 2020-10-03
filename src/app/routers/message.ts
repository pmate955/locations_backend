import * as messagesController from '../controllers/message';
import { Router } from 'express';

export const router: Router = Router({ mergeParams: true });

router.get('/broadcast', messagesController.broadcastMessages);