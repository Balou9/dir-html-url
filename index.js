var dirHtmlList = require('dir-html-list')
var getAbsPath = require('get-abs-path')

function dirHtmlUrl(dir, callback) {

  dirHtmlList(dir, function (err, data) {
    if (err) return callback(err)
    var fullHtmlPath = getAbsPath(dir, data).map(x => 'file:///' + x)

    function reducer (acc, cur, index) {
    acc[data[index]] = cur
    return acc
    }

    callback(null, fullHtmlPath.reduce(reducer, {}))
    })
}

module.exports = dirHtmlUrl
