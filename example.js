var scrape = require("./");

scrape('http://news.ycombinator.com', ['.title a', '.pagetop a'], function (error, titles, nav) {

  if(error) throw error;

  titles.forEach(function (el) {
    console.log('> ', el.innerHTML);
  });

  nav.forEach(function (el) {
    console.log(el.innerHTML);
  });
});
