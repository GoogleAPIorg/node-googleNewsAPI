var http = require('http');
function Restapi () {
    this.curlCall = function(req,res){
        var search = req.query.search;
        var url =   'http://ajax.googleapis.com/ajax/services/search/news?v=1.0&q='+search;
        http.get(url,function(hreq,hres){
            //hres.setEncoding('utf8');
            //var resNews = JSON.parse(hres);
            //console.log(resNews);
            return res.render('index', {
                title: 'Search Page',
                data:hres
            });
        });
    }
}
module.exports = Restapi;