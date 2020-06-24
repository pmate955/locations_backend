// import * as comments from '../controllers/comments';
// import { Router } from 'express';

// export const router: Router = Router({ mergeParams: true });

// router.get('/', async (req, res) => {
//   try {
//     const commentList = await comments.index(req);
//     res.json(commentList);
//   } catch (err) {
//     console.error(err);
//     res.sendStatus(404);
//   }
// });

// router.post('/', async (req, res) => {
//   try {
//     const result = await comments.create(req);
//     res.status(201).json(result);
//   } catch (err) {
//     console.error(err);
//     res.sendStatus(500);
//   }
// });

// router.get('/:id', async (req, res) => {
//   try {
//     const result = await comments.show(req);
//     res.status(result.status || 200).json(result);
//   } catch (err) {
//     console.error(err);
//     res.sendStatus(404);
//   }
// });

// router.put('/:id', async (req, res) => {
//   try {
//     const result = comments.update(req);
//     res.status(result.status || 200).json(result);
//   } catch (err) {
//     console.error(err);
//     res.sendStatus(500);
//   }
// });

// router.delete('/:id', async (req, res) => {
//   try {
//     const result = comments.destroy(req);
//     res.status(result.status || 200).json(result);
//   } catch (err) {
//     console.error(err);
//     res.sendStatus(500);
//   }
// });

