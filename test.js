var tape = require('tape')
var dirHtmlUrl = require('./index.js')

tape('Output is', function (t) {
  dirHtmlUrl(process.cwd(), function (err, data) {
    if (err) throw err
    t.ok(typeof data, 'array', 'is array')
    t.end()
  })
})

tape('Each file url', function (t) {
  dirHtmlUrl(process.cwd(), function (err, data) {
    if (err) throw err

    function startsWithF (furl) {
      return /^f/.test(furl)
    }

    t.ok(Object.values(data).every(startsWithF), 'starts with an f')
    t.end()
    })
})
