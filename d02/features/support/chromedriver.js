const chromedriver = require('chromedriver');


let server = require('./webpack');

let app;

module.exports = {
  retryAssertionTimeout: 10000,
  waitForConditionTimeout : 5000,

  before : function(done) {
    chromedriver.start();
    server.listen(8080);
    done();
  },

  after : function(done) {
    chromedriver.stop();
    server.close();

    done();
  }
};

