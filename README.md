## scrape-url

Scrape URLs with CSS selectors

```js
scrape = require('scrape-url')

scrape('http://news.ycombinator.com', '.title a', function (error, matches) {

  matches[0].innerHTML
  // => "Richard Feynman: Cargo Cult Science (1974)"

  matches[1].innerHTML
  // => "Stanford Ovshinsky: the greatest scientist you've never heard of"

})
```

## Install

```bash
$ npm install scrape-url
```
