const express = require('express');
const towns = require('../controllers/towns');
const router = new express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
  try {
    const townList = await towns.index(req);
    res.json(townList);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
