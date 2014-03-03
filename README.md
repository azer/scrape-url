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
scrape('news.ycombinator.com', ['.title a', '.foo #bar', '.span .egg'], function (error, titles, foobar, spaneggs) {
 //
})
```

To make a post request:

```js
scrape.post({ url: 'foo.com/bar', form: { message: 'Hello World' } }, ['body .content'], function  (error, content) {
  
  content[0].html()
  // => Message: 'Hello World'
  
})
```

You can pass options instead of URLs:

```js
scrape({ url: 'foo.com/bar', 'headers': { 'user-agent': 'neck trimmer 5.0' } }, ['h1.title'], function (error, titles) {
    //    
})
```

See `example.js` for more information.
