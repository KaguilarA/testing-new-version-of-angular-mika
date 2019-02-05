const carrerSchema = require('./carrer.model');

module.exports.registerCarrer = (req, res, next) => {
  var newCarrer = Object.assign(new carrerSchema(), req.body);

  newCarrer.save((err) => {
    if (err) {
      res.json({
        success: false,
        message: 'Ha ocurrido un error',
        error: err
      });
    } else {
      res.json({
        success: true,
        message: '¡Registrado correctamente!'
      });
    }
  });
};


module.exports.listCarrers = (req, res) => {
  carrerSchema.find().then((usuarios) => {
    res.send(usuarios);
  });
};

module.exports.updateCarrer = (req, res) => {
  carrerSchema.findOneAndUpdate(req.body.carrerCode, {
    $set: req.body
  }, (err, user) => {
    if (err) {
      res.json({
        success: false,
        msj: 'No se ha actualizado.' + handleError(err)
      });

    } else {
      res.json({
        success: true,
        msj: 'Se ha actualizado correctamente.' + res
      });
    }
  });
};