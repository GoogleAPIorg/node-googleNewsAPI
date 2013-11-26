var http = require('https');
var urls = [
    'https://ajax.googleapis.com/ajax/services/search/news?v=1.0&q=barack%20obama',
    'https://ajax.googleapis.com/ajax/services/search/news?v=1.0&q=technology'
];
var allResults = [];
var responded = 0;
function collectResponse(res) {
    var response = {};
    res.setEncoding('utf8');
    res.on('data', function(d) {
        response.body = d;
    });

    res.on('end', function() {
        //console.log(responseBody);
//        var response = JSON.parse(responseBody);
//        allResults = allResults.concat(response.results);
        console.log(response.body.signedRedirectUrl);
//        for(var i=0;i<=allResults.length;i++){
//            console.log(allResults.content[i]);
//        }
//        response.forEach(function(result){
//            console.log(result);
//        });
       // console.log('I have %d results for', response.results.length, res.req.path);
//        responded += 1;
//        if (responded == urls.length) {
//            console.log('All responses ended. Number of total results:', allResults.length);
//        }
    });
}
urls.forEach(function(url) {
    http.get(url, collectResponse);
});