var scrape = require("./");

scrape('http://news.ycombinator.com', '.title a', function (error, matches) {

  if(error) throw error;

  matches.forEach(function (el) {
    console.log(el.innerHTML);
  });
});
