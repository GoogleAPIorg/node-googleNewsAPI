var Restapi = require('./restapi')
module.exports = exports = function(app) { 

	var restapi = new RestAPI(app);

	app.get('/', function(req,res){
		return res.render('index', {
                title: 'Index Page'
            });
	});

	app.get('/getresult/:search', restapi.curlCall);
}