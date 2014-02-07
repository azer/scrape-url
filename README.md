## scrape-url

Scrape URLs with CSS selectors and returns elements with [jQuery-like interface](http://npmjs.org/cheerio).

## Install

```bash
$ npm install scrape-url
```

## Usage

```js
scrape = require('scrape-url')

scrape('http://news.ycombinator.com', '.title a', function (error, matches) {

  matches[0].html()
  // => "Richard Feynman: Cargo Cult Science (1974)"

  matches[1].html()
  // => "Stanford Ovshinsky: the greatest scientist you've never heard of"

})
```

Multiple selectors can be passed:

```js
scrape('http://news.ycombinator.com', ['.title a', '.foo #bar', '.span .egg'], function (error, titles, foobar, spaneggs) {
 //
})
```
