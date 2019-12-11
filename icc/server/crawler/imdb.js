var cheerio = require('cheerio')
var rp = require('request-promise')

var getIMDBCharacters = function () {
    var options = {
        url: 'https://www.imdb.com/title/tt0944947/fullcredits?ref=tt_cl_sm#cast',
        transfrom: function (body) {
           cheerio.load(body)
        }
    }
    var $ = rp(options)
    console.log($)
    console.log($('table.cast_list tr.odd,tr.even').length)
}
getIMDBCharacters()

