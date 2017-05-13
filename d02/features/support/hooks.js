const config = require('config');
const Nightmare = require('nightmare');

var {defineSupportCode} = require('cucumber');



defineSupportCode(function({After, Before}) {

  const app = null

  Before(function() {
    this.nightmare = Nightmare(config.nightmare);
    this.server = server.listen();
  });

  After(function() {
    this.nightmare.end().then();
    server.close();
  });

});
