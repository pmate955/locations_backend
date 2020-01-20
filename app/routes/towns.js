const express = require('express');
const towns = require('../controllers/towns');
const router = new express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
  try {
    const townList = await towns.index(req);
    res.json(townList);
  } catch (err) {
    console.error(err);
    res.sendStatus(404);
  }
});

router.post('/', async (req, res) => {
  try {
    const result = await towns.create(req);
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const result = await towns.show(req);
    res.status(result.status || 200).json(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(404);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const result = towns.update(req);
    res.status(result.status || 200).json(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const result = towns.destroy(req);
    res.status(result.status || 200).json(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

module.exports = router;
