import * as userController from '../controllers/user';
import { Router } from 'express';

export const router: Router = Router({ mergeParams: true });

router.get('/', userController.index);
router.get('/me', userController.me);
router.get('/:id', userController.show);
router.post('/me/delete-account', userController.destroyMe);
router.post('/', userController.create);
router.put('/me', userController.updateMe);
router.put('/:id', userController.update);
router.delete('/:id', userController.destroy);