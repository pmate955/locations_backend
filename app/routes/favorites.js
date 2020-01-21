const express = require('express');
const favorites = require('../controllers/favorites');
const router = new express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
  try {
    const favoriteList = await favorites.index(req);
    res.json(favoriteList);
  } catch (err) {
    console.error(err);
    res.sendStatus(404);
  }
});

router.post('/', async (req, res) => {
  try {
    const result = await favorites.create(req);
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const result = await favorites.show(req);
    res.status(result.status || 200).json(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(404);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const result = favorites.update(req);
    res.status(result.status || 200).json(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const result = favorites.destroy(req);
    res.status(result.status || 200).json(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

module.exports = router;
