var dirHtmlUrl = require('./index.js')

dirHtmlUrl(process.cwd(), function (err, data) {
  if (err) throw err
  console.log(data)
})
