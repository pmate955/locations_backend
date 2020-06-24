import { router as userRouter } from './user';
import { router as loginRouter } from './session';
import { router as locationRouter } from './location';
// import { router as favoriteRouter } from './favorite';
// import { router as commentRouter } from './comment';
import { Router } from 'express';

export const router: Router = Router({mergeParams: true});
router.use('/users', userRouter);
router.use('/locations', locationRouter);
// router.use('/users/:userId/favorites', favoriteRouter);
// router.use('/locations/:locationId/comments', commentRouter);
router.use('/sessions', loginRouter);