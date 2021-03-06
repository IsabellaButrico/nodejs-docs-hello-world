
process.env.PORT = '3000';
var server = require('../index');

describe('server', function () {
  before(function () {
    server.listen(3000);
  });

  after(function () {
    server.close();
  });
});

var assert = require('assert'),
    http = require('http');

describe('/', function () {
  it('should return 200', function (done) {
    http.get('http://localhost:3000', function (response) {
      assert.equal(200, response.statusCode);
      done();
    });
  });

  it('should say Hello World in node.js', function (done) {
    http.get('http://localhost:3000', function (response) {
      var data = '';

      response.on('data', function (chunk) {
        data += chunk;
      });

      response.on('end', function () {
        assert.equal('Hello World in node.js', data);
        done();
      });
    });
  });
});
