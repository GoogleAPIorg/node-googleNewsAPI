var Restapi = require('./rest/restapi')
module.exports = exports = function(app) { 

	var restapi = new Restapi(app);

	app.get('/', function(req,res){
		return res.render('index', {
                title: 'Index Page'
            });
	});
	app.get('/getresult/', restapi.curlCall);
}