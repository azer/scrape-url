## scrape-url

Scrape URLs with CSS selectors and returns elements with [jQuery-like interface](http://npmjs.org/cheerio).

## Install

```bash
$ npm install scrape-url
```

## Usage

```js
scrape = require('scrape-url');

scrape('http://news.ycombinator.com', '.title a', function (error, matches) {

  matches[0].html();
  // => "Richard Feynman: Cargo Cult Science (1974)"

  matches[1].html();
  // => "Stanford Ovshinsky: the greatest scientist you've never heard of"

});
```

Multiple selectors can be passed:

```js
scrape('news.ycombinator.com', ['.title a', '.foo #bar', '.span .egg'], function (error, titles, foobar, spaneggs) {
 //
});
```

Extra options can be passed, using an object in place of the URL string:

```js
scrape({
  url: 'https://example.com/foo',
  headers: {
    'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:27.0) Gecko/20100101 Firefox/27.0'
  },
  'h1.title',
  function (error, title) {
    title[0].html().trim();
  }
);
```

To make a post request:

```js
scrape.post({ url: 'example.com/bar', form: { message: 'Hello World' } }, ['body .content'], function  (error, content) {

  content[0].html();
  // => Message: 'Hello World'

});
```

See `example.js` for more information.
