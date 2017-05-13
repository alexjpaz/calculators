const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

const config = {
};

defineSupportCode(({Given, Then, When}) => {
  Given(/^open application$/i, () => {
    return client
      .url(`http://localhost:8080/`)
      .waitForElementVisible('#container', 5000);
  });
});

