const bodyParser = require('body-parser'),
  express = require('express'),
  morgan = require('morgan'),
  mongoose = require('mongoose'),
  app = express(),
  dotenv = require('dotenv').config(),
  port = Number(process.env.PORT),
  public = require('./public/public.route'),
  api = require('./api/api.route');

let db = mongoose.connection,
  dburl = process.env.MONGODB_URI;

mongoose.set('useCreateIndex', true)
mongoose.connect(dburl, {
  useNewUrlParser: true
});

db.on('error', console.error.bind(console, 'Error de conexión: '));

db.once('open', () => {
  console.log('Base de datos conectada correctamente');
});

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
app.use('/components', express.static(__dirname + './public/components/'));

app.use(morgan(`dev`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(morgan('dev'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(public);
app.use(api);

app.listen(port, sayHelloToMyLittleFriend());

function sayHelloToMyLittleFriend() {
  console.log(`Servidor levantado en el puerto ${port}`);
  console.log(`El nombre de la app es ${app.get('appName')}`);
}
