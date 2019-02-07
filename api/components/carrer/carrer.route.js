const express = require('express'),
  router = express.Router(),
  carrers = require('./carrer.api');

router.param('id', (req, res, next, id) => {
  req.body.id = id;
  next();
});

router.route('/save_carrer')
  .post((req, res, next) => {
    carrers.registerCarrer(req, res, next);
  });

router.route('/get_all_carrers')
  .get((req, res) => {
    carrers.listCarrers(req, res);
  });

router.route('/update_carrer')
  .put((req, res) => {
    carrers.updateCarrer(req, res);
  });

module.exports = router;
