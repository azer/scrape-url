var request = require("jsdom").env;

module.exports = scrape;

function fetch (url, callback) {
  request(url, callback);
}

function scrape (url, selectors, callback) {
  fetch(url, function (error, window) {
    if(error) return callback(error);

    if (typeof selectors == 'string') selectors = [selectors];

    var result = [undefined].concat(selectors.map(function (selector) {
      return Array.prototype.slice.call(window.document.querySelectorAll(selector));
    }));

    callback.apply(undefined, result);
  });
}
