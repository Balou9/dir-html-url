# dir-html-url

[![build status](http://img.shields.io/travis/Balou9/dir-html-url.svg?style=flat)](http://travis-ci.org/Balou9/dir-html-url) [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/Balou9/dir-html-url?branch=master&svg=true)](https://ci.appveyor.com/project/Balou9/dir-html-url)

***

Get file urls for html files in given directory

***

## Get it!

```
npm install --save dir-html-url
```

***

## Usage

``` js
var dirHtmlUrl = require('dir-html-url')
dirHtmlUrl(process.cwd(), function (err, data) {
  if (err) throw err
  console.log(data)
})

```

***

## API

### `dirHtmlUrl(dir, callback)`

***

## License

[MIT](./license.md)
