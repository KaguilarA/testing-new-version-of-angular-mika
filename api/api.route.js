const express = require('express'),
  router = express.Router({
    mergeParams: true
  }),
  userRoutes = require('./components/user/user.route'),
  carrerRoutes = require('./components/carrer/carrer.route');

router.use('/api', userRoutes);

router.use('/api', carrerRoutes);

module.exports = router;