var request = require("jsdom").env;

module.exports = scrape;

function fetch (url, callback) {
  request(url, callback);
}

function scrape (url, selector, callback) {
  fetch(url, function (error, window) {
    if(error) return callback(error);

    callback(undefined, Array.prototype.slice.call(window.document.querySelectorAll(selector)));
  });
}
