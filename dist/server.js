'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

var _users = require('./routes/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// consts

// Importing source files
var app = (0, _express2.default)(); // Importing node modules


app.use('/', _index2.default);
app.use('/users', _users2.default);

//Spread Operator (only for test)
var params = ["hello", true, 7];
var other = [1, 2].concat(params);

// arrow functions
var server = app.listen(3000, function () {

  // destructuring

  var _server$address = server.address();

  var address = _server$address.address;
  var port = _server$address.port;

  // string interpolation:
  console.log('Example app listening at http://' + address + ':' + port);
});
//# sourceMappingURL=server.js.map