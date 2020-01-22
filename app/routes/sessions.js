const express = require('express');
const sessions = require('../controllers/sessions');
const router = new express.Router({ mergeParams: true });

router.post('/', async (req, res) => {
  try {
    const townList = await sessions.new(req);
    res.json(townList);
  } catch (err) {
    console.error(err);
    res.sendStatus(404);
  }
});

module.exports = router;
