import * as sessions from '../controllers/sessions';
import { Router } from 'express';

export const router: Router = Router({ mergeParams: true });

router.post('/new', async (req, res) => {
  try {
    const session = await sessions.new(req);
    res.status(201).json(session);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

router.delete('/destroy', async (req, res) => {
  try {
    await sessions.destroy(req);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

