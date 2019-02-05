const express = require('express'),
  morgan = require('morgan'),
  app = express(),
  port = 3000,
  public = require('./public/public.route'),
  api = require('./api/api.route');

let componentsRoute = `../components/`;

// Settings

app.set(`appName`, `cenfotec-software-house`);
app.set(`view engine`, `pug`);

// Middlewares

app.use(express.static(__dirname + '/public'));
app.use('/vendor', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/vendor', express.static(__dirname + '/node_modules/bootstrap/dist/js/'));
app.use('/vendor', express.static(__dirname + '/node_modules/popper.js/dist/'));
app.use('/vendor', express.static(__dirname + '/node_modules/sweetalert/dist'));
app.use('/vendor', express.static(__dirname + '/node_modules/angular/'));
app.use('/vendor', express.static(__dirname + '/node_modules/@uirouter/angularjs/release/'));
app.use('/vendor', express.static(__dirname + '/node_modules/oclazyload/dist/'));
app.use('/vendor', express.static(__dirname + '/node_modules/ui-router-page-title/'));
app.use('/vendor', express.static(__dirname + '/node_modules/angular-messages/'));
app.use('/vendor', express.static(__dirname + '/node_modules/angular-scroll/'));
app.use('/vendor', express.static(__dirname + '/node_modules/ng-file-upload/dist/'));
app.use('/vendor', express.static(__dirname + '/node_modules/angular-animate/'));
app.use('/vendor', express.static(__dirname + '/node_modules/angular-filepicker/dist/'));

app.use(morgan(`dev`));
app.use(public);
app.use(api);

app.listen(port, sayHelloToMyLittleFriend());

function sayHelloToMyLittleFriend() {
  console.log(`Servidor levantado en el puerto ${port}`);
  console.log(`El nombre de la app es ${app.get('appName')}`);
}