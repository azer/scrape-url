var scrape = require("./");

scrape('http://news.ycombinator.com', ['.title a', '.pagetop a'], function (error, titles, nav) {

  if(error) throw error;

  titles.forEach(function (el, ind) {
    console.log('  %d. %s', ind, el.html());
  });

  console.log('\n\nNavigation');
  nav.forEach(function (el, ind) {
    console.log('  %d. %s', ind, el.html());
  });
});
