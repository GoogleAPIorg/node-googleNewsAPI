var http = require('http');
function Restapi () {
    this.curlCall = function(req,res){
        var search = req.query.search;
        var url =   'http://ajax.googleapis.com/ajax/services/search/news?v=1.0&q='+search;
        http.get(url, this.collectData);
    }
    this.collectData = function(req,res){

        res.setEncoding('utf8');
        res.on('data', function(d) {
            responseBody = d;
        });
        res.on('end', function(request,response) {
            var responseEnd = JSON.parse(responseBody);
            console.log(responseEnd);
            return response.render('index', {
                title: 'Index Page'
            });
        });
    }
}
module.exports = Restapi;