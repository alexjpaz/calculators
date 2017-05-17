const jsuri = require('jsuri');

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function get() {
  const search = location.search.substring(1);
  return JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
}

function set(params) {
  if(!params) return;
  const uri = new jsuri(location.href);
  Object.keys(params).map((k) => {
    uri.replaceQueryParam(k, params[k]);
  });
  window.history.pushState(null, "Title", `${uri.query()}`);
}

module.exports = {
  getParameterByName: getParameterByName,
  set: set
};
