var https = require('https');
function RestAPI () {
    this.curlCall = function(req,res){
        var search = req.query.search;
        var url =   'https://ajax.googleapis.com/ajax/services/search/news?v=1.0&q='+search;
        console.log(url);
        https.get(url,function(req,res){
            console.log(res);
            return res.render('index', {
                title: 'Search Page',
                data:res
            });
        });
    }
}
module.exports = RestAPI;