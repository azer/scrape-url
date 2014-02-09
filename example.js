var scrape = require("./");

scrape('news.ycombinator.com', ['.title a', '.pagetop a'], function (error, titles, nav) {

  if(error) throw error;

  titles.forEach(function (el, ind) {
    console.log('  %d. %s', ind, el.html());
  });

  console.log('\n\nNavigation');
  nav.forEach(function (el, ind) {
    console.log('  %d. %s', ind, el.html());
  });
});

scrape.post({ url: 'www.w3schools.com/php/welcome.php', form: { name: 'foo', email: 'bar', } }, 'body', function (error, content) {
  console.log('Name & e-mail:', content[0].html());
});
