var request = require('request');
function Restapi () {
    this.curlCall = function(req,res){
        var search = req.query.search;
        var url =   'http://ajax.googleapis.com/ajax/services/search/news?v=1.0&q='+search;
        var options = {
            host: 'http://ajax.googleapis.com/ajax/services/search/news?v=1.0&q=vivek'
        };
        request(url, function (error, response, body) {
          if (!error && response.statusCode == 200) {

           /* response.on("data", function (d) {
                data += d;
            });

            response.on("end", function () {
                response.render('index', {
                    title: 'Index Page',
                    resData: data
                });
            });*/
            res.render('restapiresult', {
                    title: 'View Page',
                    resData: body
                });

          }
        });
    }
}
module.exports = Restapi;