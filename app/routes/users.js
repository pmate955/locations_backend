const express = require('express');
const users = require('../controllers/users');
const router = new express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
  try {
    const userList = await users.index(req);
    res.json(userList);
  } catch (err) {
    console.error(err);
    res.sendStatus(404);
  }
});

router.post('/', async (req, res) => {
  try {
    const result = await users.create(req);
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const result = await users.show(req);
    res.status(result.status || 200).json(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(404);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const result = users.update(req);
    res.status(result.status || 200).json(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const result = users.destroy(req);
    res.status(result.status || 200).json(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

module.exports = router;
