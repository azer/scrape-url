var debug = require("debug")('scrape-url');
var request = require("request");
var parse = require("cheerio").load;

module.exports = get;
module.exports.post = post;

function post (options, selectors, callback) {
  scrape('post', options, selectors, callback);
}

function get (url, selectors, callback) {
  scrape('get', { url: url }, selectors, callback);
}

function scrape (method, options, selectors, callback) {
  !/\w:\/\//.test(options.url) && (options.url = 'http://' + options.url);

  debug('%s %s', method.toUpperCase(), options.url);

  request[method](options, match);

  function match (error, response, body) {
    if(error) return callback(error);
    if (response.statusCode != 200) return;

    if (typeof selectors == 'string') selectors = [selectors];

    var doc = parse(body);

    var result = [undefined].concat(selectors.map(function (selector) {
      var elements = [];
      var selected = doc(selector);

      selected.each(function () {
        elements.push(doc(this));
      });

      return elements;
    }));

    callback.apply(undefined, result);
  }
}
