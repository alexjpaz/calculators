var chromedriver = require('chromedriver');

let server;

module.exports = {
  retryAssertionTimeout: 10000,
  waitForConditionTimeout : 5000,
  before : function(done) {
    chromedriver.start();
    done();
  },

  after : function(done) {
    chromedriver.stop();
    done();
  }
};

