const express = require('express');
const locations = require('../controllers/locations');
const router = new express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
  try {
    const locationList = await locations.index(req);
    res.json(locationList);
  } catch (err) {
    console.error(err);
    res.sendStatus(404);
  }
});

router.post('/', async (req, res) => {
  try {
    const result = await locations.create(req);
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const result = await locations.show(req);
    res.status(result.status || 200).json(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(404);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const result = locations.update(req);
    res.status(result.status || 200).json(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const result = locations.destroy(req);
    res.status(result.status || 200).json(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

module.exports = router;
