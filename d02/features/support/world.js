const config = require('config');
const logger = require('winston');

var {defineSupportCode} = require('cucumber');

var Nightmare = require('nightmare');

function CustomWorld() {
  //this.nightmare = new Nightmare(config.nightmare);
}

defineSupportCode(function({setDefaultTimeout}) {
  setDefaultTimeout(60 * 1000);
});

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(CustomWorld)
})
