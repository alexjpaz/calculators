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

  Given(/^open application with params (.*)$/, (params) => {
    return client
      .url(`http://localhost:8080/?${params}`)
      .waitForElementVisible('#container', 5000);
  });

  Then(/^verify chart displays$/i, () => {
    return client
      .waitForElementVisible('#chart_div svg');
  });

  When("update the input {string} with {float}", (name, value) => {
    return client
      .clearValue(`input[name=${name}]`)
      .setValue(`input[name=${name}]`, value)
    ;
  });

  Then("verify the url parameter {string} equal {float}", (name, value) => {

return client
      .url(function(result) {
        this.assert.equal(result.value, 'http://localhost:8080/?Co=4.2', 'Url is the same');
      });
    ;
  });
});

