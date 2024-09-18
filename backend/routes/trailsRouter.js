const express = require('express');
const Trail = require('../models/trails');

const trailRouter = express.Router();

/* GET users listing. */
trailRouter.route('/')
.get((req, res, next) => {
  Trail.find()
  .then()
});

module.exports = router;
