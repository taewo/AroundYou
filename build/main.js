'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _routes = require('./routes.js');

var _routes2 = _interopRequireDefault(_routes);

var _gmaps = require('../build/gmaps.js');

var _gmaps2 = _interopRequireDefault(_gmaps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.set("port", 7777);

// [CONFIGURE mongoose]
// Connect to mongoDB server
var db = _mongoose2.default.connection;
db.on('err', console.error);
db.once('open', function () {
  console.log("Connected to mongoDB server!");
});
_mongoose2.default.connect('mongodb://localhost/');

// Define mongoose Model


app.use(_express2.default.static(__dirname + './../client/public'));
app.use('/', _routes2.default);

app.get('/', function (req, res) {
  res.render('./../client/public/index.html');
});

app.get('/test', function (req, res) {
  res.send('test');
});

var server = app.listen(app.get("port"), function () {
  console.log("Express listening on port", app.get("port"));
});