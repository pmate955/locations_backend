import * as commentController from '../controllers/comments';
import { Router } from 'express';

export const router: Router = Router({ mergeParams: true });

router.post('/', commentController.create);