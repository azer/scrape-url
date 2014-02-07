var request = require("request");
var parse = require("cheerio").load;

module.exports = scrape;

function scrape (url, selectors, callback) {
  request(url, function (error, response, body) {
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
  });
}
