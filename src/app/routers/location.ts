import * as locationController from '../controllers/location';
import { Router } from 'express';

export const router: Router = Router({ mergeParams: true });

router.get('/', locationController.index);
router.get('/:id', locationController.show);
router.post('/', locationController.create);
router.put('/:id', locationController.update);
router.delete('/:id', locationController.destroy);